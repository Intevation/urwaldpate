(function(e){function t(t){for(var r,o,c=t[0],s=t[1],d=t[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,c=1;c<a.length;c++){var s=a[c];0!==n[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"029a":function(e,t,a){},"13a8":function(e,t,a){},5490:function(e,t,a){"use strict";var r=a("13a8"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("a4d3"),a("e01a"),a("b636"),a("dc8d"),a("efe9"),a("d28b"),a("2a1b"),a("80e0"),a("6b9e"),a("197b"),a("2351"),a("8172"),a("944a"),a("81b8"),a("99af"),a("a874"),a("a623"),a("cb29"),a("4de4"),a("7db0"),a("c740"),a("0481"),a("5db7"),a("4160"),a("a630"),a("caad"),a("c975"),a("e260"),a("a15b"),a("baa5"),a("d81d"),a("5ded"),a("13d5"),a("f4dd"),a("26e9"),a("fb6a"),a("45fc"),a("4e82"),a("f785"),a("a434"),a("4069"),a("73d9"),a("c19f"),a("ace4"),a("efec"),a("b56e"),a("b0c0"),a("0c47"),a("4ec9"),a("5327"),a("79a8"),a("9ff9"),a("3ea3"),a("40d9"),a("ff9c"),a("0ac8"),a("f664"),a("4057"),a("bc01"),a("6b93"),a("ca21"),a("90d7"),a("2af1"),a("0261"),a("7898"),a("23dc"),a("b65f"),a("a9e3"),a("35b3"),a("f00c"),a("8ba4"),a("9129"),a("583b"),a("aff5"),a("e6e1"),a("c35a"),a("25eb"),a("b680"),a("cca6"),a("12a8"),a("e71b"),a("4fad"),a("dca8"),a("c1f9"),a("e439"),a("dbb4"),a("7039"),a("3410"),a("2b19"),a("c906"),a("e21d"),a("e43e"),a("b64b"),a("bf96"),a("5bf7"),a("cee8"),a("af93"),a("d3b7"),a("07ac"),a("e6cf"),a("a79d"),a("a6fd"),a("4ae1"),a("3f3a"),a("ac16"),a("5d41"),a("9e4a"),a("7f78"),a("c760"),a("db96"),a("1bf2"),a("d6dd"),a("7ed3"),a("8b9a"),a("4d63"),a("ac1f"),a("5377"),a("25f0"),a("6062"),a("f5b2"),a("8a79"),a("f6d6"),a("2532"),a("3ca3"),a("466d"),a("843c"),a("4d90"),a("d80f"),a("38cf"),a("5319"),a("841c"),a("1276"),a("2ca0"),a("498a"),a("1e25"),a("eee7"),a("18a5"),a("1393"),a("04d3"),a("cc71"),a("c7cd"),a("9767"),a("1913"),a("c5d0"),a("9911"),a("c96a"),a("2315"),a("4c53"),a("664f"),a("cfc3"),a("4a9b"),a("fd87"),a("8b09"),a("143c"),a("5cc6"),a("8a59"),a("84c3"),a("fb2c"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("20bf"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ec97"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("10d1"),a("1fe2"),a("159b"),a("ddb0"),a("130f"),a("9f96"),a("2b3d"),a("bf19"),a("9861"),a("96cf");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("Map")],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"map"}},[a("Popup",{attrs:{dialog:e.dialog,"selected-features":e.selectedFeatures},on:{"update:dialog":function(t){e.dialog=t},"update:selectedFeatures":function(t){e.selectedFeatures=t},"update:selected-features":function(t){e.selectedFeatures=t}}})],1)},c=[],s=(a("6cc5"),a("e11e")),d=a.n(s),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"485"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v(" Ja, ich werde Urwald-Pate für "+e._s(e.hektar)+" Hektar! ")]),a("v-card-text",[e._v(" Ich schütze mit "),a("strong",[e._v(e._s(e.betrag)+" Euro monatlich")]),e._v(" Urwald von morgen im Stechlinsee-Gebiet. ")]),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{small:"",outlined:"",color:"rgb(118,184,40)"},on:{click:e.more}},[e._v(" Weitere Fläche wählen! ")]),a("v-btn",{attrs:{small:"",color:"rgb(118,184,40)",dark:""},on:{click:e.klick}},[e._v(" Jetzt Urwald-Pate werden! ")])],1)],1)],1)],1)},u=[],f={props:{dialog:Boolean,selectedFeatures:{type:Array,default:function(){return[]}}},computed:{betrag:function(){return 10*this.hektarIDs.length},hektar:function(){return 1*this.hektarIDs.length},hektarIDs:function(){var e=[];return this.selectedFeatures.length>0?(this.selectedFeatures.forEach((function(t){e.push(t.properties.RasterID)})),e):[]}},methods:{more:function(){this.$emit("update:dialog",!this.dialog)},klick:function(){window.open("https://naturerbe.nabu.de/spenden-und-helfen/patenschaften/include/formular/urwald.html?hektar-id="+this.hektarIDs+"&betrag="+this.betrag),this.$emit("update:dialog",!this.dialog),this.$emit("update:selectedFeatures",this.selectedFeatures=[])}}},p=f,h=(a("88c8"),a("2877")),b=a("6544"),m=a.n(b),g=a("8336"),y=a("b0af"),v=a("99d9"),w=a("169a"),S=a("0fd9"),k=Object(h["a"])(p,l,u,!1,null,null,null),I=k.exports;m()(k,{VBtn:g["a"],VCard:y["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VDialog:w["a"],VRow:S["a"]});var x=a("59ca");a("66ce");delete d.a.Icon.Default.prototype._getIconUrl,d.a.Icon.Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var O={components:{Popup:I},props:{},data:function(){return{firebaseConfig:{apiKey:"AIzaSyCYTUy81j5ALlt5xDgPZ67bipaRYceeo8s",authDomain:"urwaldpate-7ccfd.firebaseapp.com",databaseURL:"https://urwaldpate-7ccfd.firebaseio.com",projectId:"urwaldpate-7ccfd\n",storageBucket:"urwaldpate-7ccfd.appspot.com",messagingSenderId:"1026917551699",appId:"1026917551699"},db:{},list:[],featuresRef:{},dialog:!1,selectedFeatures:[],donated:[],map:{},esri:d.a.tileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:'&copy;<a href="http://www.esri.com/">Esri</a>i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',maxZoom:18}),osm:new d.a.TileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{minZoom:8,maxZoom:18,attribution:'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, 10405fb'}),streetmap:d.a.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>, 10405fb',maxZoom:18,id:"mapbox.streets",accessToken:"pk.eyJ1IjoiYmpvZXJuc2NoaWxiZXJnIiwiYSI6InRzOVZKeWsifQ.y20mr9o3MolFOUdTQekhUA",noWrap:!0}),satellite:d.a.tileLayer.wms("https://tiles.maps.eox.at/?",{layers:"s2cloudless_3857",attribution:'<a href="https://s2maps.eu" target="_blank">Sentinel-2 cloudless - https://s2maps.eu</a> by <a href="https://eox.at/" target="_blank">EOX IT Services GmbH</a> (Contains modified Copernicus Sentinel data 2017 & 2018)'}),donatedStyle:{fillOpacity:.5,fillColor:"#31a354"},defaultStyle:{color:"grey",weight:2,opacity:.85},highlightStyle:{color:"#4de600",weight:3,opacity:.85},selectedStyle:{color:"grey",weight:1,opacity:.85,fillOpacity:.85,fillColor:"#4de600"},ebene:{}}},watch:{list:{handler:function(){var e=this;this.ebene instanceof d.a.Layer&&this.ebene.remove(),this.ebene=d.a.geoJSON(null,{onEachFeature:this.onEachFeatureClosure(this.defaultStyle,this.highlightStyle),filter:function(e){if("Stechlinsee-Gebiet"===e.properties.Gebiet)return!0},style:function(e){if(0!=e.properties.PatenID)return this.donatedStyle}.bind(this)});var t=new Promise((function(t){e.list.forEach((function(a,r,n){e.ebene.addData(a),r===n.length-1&&t()}))}));t.then((function(){e.ebene.addTo(e.map),e.map.fitBounds(e.ebene.getBounds()),e.map.setMaxBounds(e.ebene.getBounds())}))},deep:!0,immediate:!1}},created:function(){this.fetchDataFromFirebase()},mounted:function(){this.map=d.a.map("map",{attributionControl:!1,zoom:15,maxZoom:18,minZoom:13,fadeAnimation:!1,zoomControl:!1,doubleClickZoom:!1}),this.map.addControl(d.a.control.attribution({position:"bottomright",prefix:!1})),this.osm.addTo(this.map)},methods:{fetchDataFromFirebase:function(){x["initializeApp"](this.firebaseConfig),this.db=x["database"](),this.featuresRef=this.db.ref("/biesenthalerbecken/features"),this.list=this.getSynchronizedArray(this.featuresRef.orderByChild("properties/Gebiet").equalTo("Stechlinsee-Gebiet")),this.wrapLocalCrudOps(this.selectedFeatures,this.featuresRef)},syncChanges:function(e,t){function a(e,t){for(var a=0,r=e.length;a<r;a++)if(e[a].$id===t)return a;return-1}function r(e,t){if(null===t)return 0;var r=a(e,t);return-1===r?e.length:r+1}t.on("child_added",(function(t,a){var n=t.val();n.$id=t.key;var i=r(e,a);e.splice(i,0,n)})),t.on("child_removed",(function(t){var r=a(e,t.key);r>-1&&e.splice(r,1)})),t.on("child_changed",(function(t){var a=e.findIndex((function(e){return e.properties.RasterID===t.val().properties.RasterID}));a>-1&&(e.splice(a,1,t.val()),e[a].$id=t.key)})),t.on("child_moved",(function(t,n){var i=a(e,t.key);if(i>-1){var o=e.splice(i,1)[0],c=r(e,n);e.splice(c,0,o)}}))},wrapLocalCrudOps:function(e,t){function a(e,t){for(var a=0,r=e.length;a<r;a++)if(e[a].$id===t)return a;return-1}e.$add=function(e){return Object.prototype.hasOwnProperty.call(e,"$id")&&delete e.$id,t.push(e)},e.$remove=function(e){t.child(e).remove()},e.$set=function(e,a){Object.prototype.hasOwnProperty.call(a,"$id")&&delete a.$id,t.child(e).set(a)},e.$indexOf=function(t){return a(e,t)}},getSynchronizedArray:function(e){var t=[];return this.syncChanges(t,e),this.wrapLocalCrudOps(t,e),t},onEachFeatureClosure:function(e,t){var a=this;return function(r,n){1===r.properties.PatenID&&a.donated.push(r),n.setStyle(e),n.on("mouseover",(function(e){void 0!=e.target.feature.properties.PatenID&&0!==e.target.feature.properties.PatenID||this.setStyle(t)})),n.on("mouseout",(function(t){void 0!=t.target.feature.properties.PatenID&&0!==t.target.feature.properties.PatenID||this.setStyle(e)})),n.on("click",(function(e){void 0!=e.target.feature.properties.PatenID&&0!==e.target.feature.properties.PatenID||a.klick(e.target)}))}.bind(this)},klick:function(e){this.dialog=!1,this.donated.includes(e.feature)||(this.selectedFeatures.includes(e.feature)?(this.selectedFeatures=this.selectedFeatures.filter((function(t){return t!=e.feature})),this.ebene.resetStyle(e)):(e.setStyle(this.selectedStyle),this.selectedFeatures.push(e.feature)),0!=this.selectedFeatures.length&&(this.dialog=!0))}}},_=O,C=(a("5490"),Object(h["a"])(_,o,c,!1,null,null,null)),P=C.exports,F={name:"App",components:{Map:P},data:function(){return{}}},D=F,j=(a("cf25"),a("7496")),$=a("a75b"),A=Object(h["a"])(D,n,i,!1,null,null,null),U=A.exports;m()(A,{VApp:j["a"],VContent:$["a"]});var E=a("f309");r["a"].use(E["a"]);var G=new E["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:G,render:function(e){return e(U)}}).$mount("#app")},"88c8":function(e,t,a){"use strict";var r=a("ad27"),n=a.n(r);n.a},ad27:function(e,t,a){},cf25:function(e,t,a){"use strict";var r=a("029a"),n=a.n(r);n.a}});