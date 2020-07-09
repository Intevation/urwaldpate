<template>
  <div id="map">
    <Popup
      :dialog.sync="dialog"
      :gebiet="gebiet"
      :selected-features.sync="selectedFeatures" />
    <div>
      <v-snackbar
        v-model="snackbar"
        dark
        top
        color="error">
        Kein Gebiet angegeben oder gefunden!
        <v-btn
          fab
          small
          color="error"
          v-bind="attrs"
          @click="snackbar = false">
          <v-icon dark>
            X
          </v-icon>
        </v-btn>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Popup from "./Popup";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/database";
//import undefined from "firebase/database";

//https://github.com/KoRiGaN/Vue2Leaflet/issues/28

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  components: { Popup },
  props: {},
  data: () => ({
    firebaseConfig: {
      apiKey: process.env.VUE_APP_apiKey,
      authDomain: process.env.VUE_APP_authDomain,
      databaseURL: process.env.VUE_APP_databaseURL,
      projectId: process.env.VUE_APP_projectId,
      storageBucket: process.env.VUE_APP_storageBucket,
      messagingSenderId: process.env.VUE_APP_messagingSenderId,
      appId: process.env.VUE_APP_messagingSenderId
    },
    snackbar: false,
    gebiet: "",
    db: {},
    list: [],
    featuresRef: {},
    dialog: false,
    selectedFeatures: [],
    donated: [],
    map: {},
    //https://github.com/esri/esri-leaflet#terms
    esri: L.tileLayer(
      "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          '&copy;<a href="http://www.esri.com/">Esri</a>i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        maxZoom: 18
      }
    ),
    osm: new L.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      minZoom: 8,
      maxZoom: 18,
      attribution:
        'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, '+process.env.VUE_APP_GIT_HASH
    }),
    streetmap: L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>, ' + process.env.VUE_APP_GIT_HASH,
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1IjoiYmpvZXJuc2NoaWxiZXJnIiwiYSI6InRzOVZKeWsifQ.y20mr9o3MolFOUdTQekhUA",
        noWrap: true
      }
    ),
    satellite: L.tileLayer.wms("https://tiles.maps.eox.at/?", {
      layers: "s2cloudless_3857",
      attribution:
        '<a href="https://s2maps.eu" target="_blank">Sentinel-2 cloudless - https://s2maps.eu</a> by <a href="https://eox.at/" target="_blank">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2017 & 2018)'
    }),
    //#ba3b76
    //#b54076
    //#d0b6d0
    //#d38231
    //#13c4be
    //#e87a05
    //#31a354
    donatedStyle: { fillOpacity: 0.5, fillColor: "#31a354" },
    defaultStyle: {
      color: "grey",
      weight: 2,
      opacity: 0.85
    },
    highlightStyle: {
      color: "#4de600",
      weight: 3,
      opacity: 0.85
    },
    selectedStyle: {
      color: "grey",
      weight: 1,
      opacity: 0.85,
      fillOpacity: 0.85,
      fillColor: "#4de600"
    },
    ebene: {}
  }),
  watch: {
    list: {
      handler: function() {
        let area_comp=this.gebiet
        if (this.ebene instanceof L.Layer) {
          this.ebene.remove();
        }
        this.ebene = L.geoJSON(null, {
          onEachFeature: this.onEachFeatureClosure(
            this.defaultStyle,
            this.highlightStyle
          ),
          filter: function(feature) {
            if (feature.properties.Gebiet === area_comp) return true;
          },
          style: function(feature) {
            if (feature.properties.PatenID != 0) {
              return this.donatedStyle;
            }
          }.bind(this)
        });

        // var bar = new Promise((resolve, reject) => {
        var bar = new Promise(resolve => {
          this.list.forEach((value, index, array) => {
            this.ebene.addData(value);
            if (index === array.length - 1) resolve();
          });
        });

        bar.then(() => {
          this.ebene.addTo(this.map);
          this.map.fitBounds(this.ebene.getBounds());
          this.map.setMaxBounds(this.ebene.getBounds());
        });
      },
      deep: true,
      immediate: false
    }
  },
  created() {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("gebiet")) {
      let param;
      param = searchParams.get("gebiet");
      if (param != ""){
      // this.fetchData();
      this.fetchDataFromFirebase(param);
      this.gebiet=param;
      } else {

      this.snackbar=true;
      // eslint-disable-next-line no-console
      console.error("Kein Gebiet angegeben!")
      }
    } else {

      this.snackbar=true;
      // eslint-disable-next-line no-console
      console.error("Kein Gebiet angegeben!")
    }
  },
  mounted() {
    this.map = L.map("map", {
      attributionControl: false,
      zoom: 15,
      maxZoom: 18,
      minZoom: 13,
      //maxBounds: [[42, -46], [58, 67]],
      //maxBounds: [[0, -180], [0, 180]],
      fadeAnimation: false,
      zoomControl: false,
      doubleClickZoom: false
      // renderer: L.canvas()
    });

    this.map.addControl(
      L.control.attribution({
        position: "bottomright",
        prefix: false
      })
    );

    this.osm.addTo(this.map);
    // map.on("moveend", function() {
    //   console.log(map.getCenter());
    // });
  },
  methods: {
    fetchDataFromFirebase(param) {
      firebase.initializeApp(this.firebaseConfig);
      this.db = firebase.database();
      //this.rasterRef = firebase.database().ref();
      this.featuresRef = this.db.ref("/biesenthalerbecken/features");
      this.list = this.getSynchronizedArray(this.featuresRef.orderByChild("properties/Gebiet").equalTo(param));
      this.wrapLocalCrudOps(this.selectedFeatures, this.featuresRef);
    },
    syncChanges(list, ref) {
      function positionFor(list, key) {
        for (var i = 0, len = list.length; i < len; i++) {
          if (list[i].$id === key) {
            return i;
          }
        }
        return -1;
      }
      // using the Firebase API's prevChild behavior, we
      // place each element in the list after it's prev
      // sibling or, if prevChild is null, at the beginning
      function positionAfter(list, prevChild) {
        if (prevChild === null) {
          return 0;
        } else {
          var i = positionFor(list, prevChild);
          if (i === -1) {
            return list.length;
          } else {
            return i + 1;
          }
        }
      }
      ref.on("child_added", function _add(snap, prevChild) {
        var data = snap.val();
        data.$id = snap.key; // assumes data is always an object
        var pos = positionAfter(list, prevChild);
        list.splice(pos, 0, data);
      });

      ref.on("child_removed", function _remove(snap) {
        var i = positionFor(list, snap.key);
        if (i > -1) {
          list.splice(i, 1);
        }
      });

      ref.on("child_changed", function _change(snap) {
        //var i = positionFor(list, snap.key);
        var i = list.findIndex(
          x => x.properties.RasterID === snap.val().properties.RasterID
        );
        if (i > -1) {
          //list[i] = snap.val();
          //list[i].$id = snap.key; // assumes data is always an object

          // Caveats
          // Due to limitations in JavaScript, Vue cannot detect the following changes to an array:
          // When you directly set an item with the index, e.g. vm.items[indexOfItem] = newValue
          // https://vuejs.org/v2/guide/list.html#Object-Change-Detection-Caveats
          list.splice(i, 1, snap.val());
          list[i].$id = snap.key; // assumes data is always an object

          //Alternatives:
          //self.list =Object.assign([],list)

          //self.list=[]
          //self.list=list

          //// https://github.com/vuejs/vue/issues/2164#issuecomment-287022802
          //// CBD? Maybe with computed property?
          //self.list=list.slice(0)
          //// Because functions get lost during slice.
          //self.wrapLocalCrudOps(self.list,ref)
        }
      });

      ref.on("child_moved", function _move(snap, prevChild) {
        var curPos = positionFor(list, snap.key);
        if (curPos > -1) {
          var data = list.splice(curPos, 1)[0];
          var newPos = positionAfter(list, prevChild);
          list.splice(newPos, 0, data);
        }
      });
    },
    wrapLocalCrudOps(list, firebaseRef) {
      function positionFor(list, key) {
        for (var i = 0, len = list.length; i < len; i++) {
          if (list[i].$id === key) {
            return i;
          }
        }
        return -1;
      }
      // we can hack directly on the array to provide some convenience methods
      list.$add = function(data) {
        if (Object.prototype.hasOwnProperty.call(data, "$id")) {
          delete data.$id;
        }
        return firebaseRef.push(data);
      };

      list.$remove = function(key) {
        firebaseRef.child(key).remove();
      };

      list.$set = function(key, newData) {
        // make sure we don't accidentally push our $id prop
        if (Object.prototype.hasOwnProperty.call(newData, "$id")) {
          delete newData.$id;
        }
        firebaseRef.child(key).set(newData);
      };

      list.$indexOf = function(key) {
        return positionFor(list, key); // positionFor in examples above
      };
    },
    getSynchronizedArray(firebaseRef) {
      var list = [];
      this.syncChanges(list, firebaseRef);
      this.wrapLocalCrudOps(list, firebaseRef);
      return list;
    },
    onEachFeatureClosure(defaultStyle, highlightStyle) {
      let that = this;

      return function onEachFeature(feature, layer) {
        if (feature.properties.PatenID === 1) {
          that.donated.push(feature);
        }
        //if (feature.properties && feature.properties.RasterID) {
        //  layer.bindTooltip(String(feature.properties.RasterID));
        //}

        // Load the default style.
        layer.setStyle(defaultStyle);

        layer.on("mouseover", function(e) {
          // Change the style to the highlighted version
          if (
            e.target.feature.properties.PatenID == undefined ||
            e.target.feature.properties.PatenID === 0
          ) {
            this.setStyle(highlightStyle);
          }
        });

        // Create a mouseout event that undoes the mouseover changes
        layer.on("mouseout", function(e) {
          // Reverting the style back
          if (
            e.target.feature.properties.PatenID == undefined ||
            e.target.feature.properties.PatenID === 0
          ) {
            this.setStyle(defaultStyle);
          }
        });
        layer.on("click", function(e) {
          if (
            e.target.feature.properties.PatenID == undefined ||
            e.target.feature.properties.PatenID === 0
          ) {
            that.klick(e.target);
          }
        });
      }.bind(this);
    },
    klick(layer) {
      this.dialog = false;
      if (!this.donated.includes(layer.feature)) {
        if (!this.selectedFeatures.includes(layer.feature)) {
          layer.setStyle(this.selectedStyle);
          this.selectedFeatures.push(layer.feature);
        } else {
          // this.selectedFeatures = this.selectedFeatures.filter(function(value,index, arr)){});
          this.selectedFeatures = this.selectedFeatures.filter(function(value) {
            return value != layer.feature;
          });
          this.ebene.resetStyle(layer);
        }
        if (this.selectedFeatures.length != 0) {
          this.dialog = true;
        }
      }
    }
  }
};
</script>

<style>
#map {
  width: 100% !important;
  height: 100% !important;
  z-index: 9999;
}
</style>
