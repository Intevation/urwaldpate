<template>
  <div id="map">
    <Popup :dialog.sync="dialog" :selected="selected"></Popup>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Popup from "./Popup";

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
    dialog: false,
    selected: [],
    raster: {},
    map: {},
    defaultStyle: {
      color: "grey",
      weight: 1,
      opacity: 0.5
    },
    highlightStyle: {
      color: "#4de600",
      weight: 3,
      opacity: 0.5
    },
    selectedStyle: {
      color: "grey",
      weight: 1,
      opacity: 0.5,
      fillOpacity: 0.5,
      fillColor: "#4de600"
    },
    ebene: {}
  }),
  watch: {
    raster: function() {
      this.ebene = L.geoJSON(null, {
        onEachFeature: this.onEachFeatureClosure(
          this.defaultStyle,
          this.highlightStyle
        )
      });
      this.ebene.addData(this.raster);
      this.ebene.addTo(this.map);
      this.map.fitBounds(this.ebene.getBounds());
      this.map.setMaxBounds(this.ebene.getBounds());
    }
  },
  created() {
    this.fetchData();
  },
  mounted() {
    let map = L.map("map", {
      attributionControl: false,
      center: [35.5322, 21.09375],
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

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1IjoiYmpvZXJuc2NoaWxiZXJnIiwiYSI6InRzOVZKeWsifQ.y20mr9o3MolFOUdTQekhUA",
        noWrap: true
      }
    ).addTo(map);
    this.map = map;
    // map.on("moveend", function() {
    //   console.log(map.getCenter());
    // });
  },
  methods: {
    fetchData() {
      fetch("data/biesbeck.geojson")
        .then(data => {
          return data.json();
        })
        .then(json => {
          this.raster = json;
        })
        .catch(err => console.error(err));
    },
    onEachFeatureClosure(defaultStyle, highlightStyle) {
      self = this;

      return function onEachFeature(feature, layer) {
        //if (feature.properties && feature.properties.RasterID) {
        //  layer.bindTooltip(String(feature.properties.RasterID));
        //}

        // Load the default style.
        layer.setStyle(defaultStyle);

        layer.on("mouseover", function(e) {
          // Change the style to the highlighted version
          this.setStyle(highlightStyle);
        });

        // Create a mouseout event that undoes the mouseover changes
        layer.on("mouseout", function(e) {
          // Reverting the style back
          this.setStyle(defaultStyle);
        });
        layer.on("click", function(e) {
          //this.setStyle(self.selectedStyle);
          //console.log(e);
          self.klick(e.target, e.target.feature.properties.RasterID);
        });
      }.bind(this);
    },
    klick(layer, RasterID) {
      this.dialog = false;
      if (!this.selected.includes(RasterID)) {
        layer.setStyle(this.selectedStyle);
        this.selected.push(RasterID);
      } else {
        this.selected = this.selected.filter(function(value, index, arr) {
          return value != RasterID;
        });
        this.ebene.resetStyle(layer);
      }
      if (this.selected.length != 0) {
        this.dialog = true;
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
