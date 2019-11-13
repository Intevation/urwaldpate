<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="485">
      <v-card>
        <v-card-title class="headline">Ja, ich werde Urwald-Pate für {{hektar}} Hektar!</v-card-title>

        <v-card-text>
          Ich schütze mit
          <strong>{{betrag}} Euro monatlich</strong> Urwald von morgen im Biesenthaler Becken.
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            small
            outlined
            color="rgb(118,184,40)"
            @click="more"
          >Weitere Fläche wählen!</v-btn>
          <v-btn small color="rgb(118,184,40)" dark @click="klick">Jetzt Urwald-Pate werden!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style>
.headline {
  word-break: normal !important;
}
</style>

<script>
export default {
  props: { dialog: Boolean, selectedFeatures: Array },
  computed: {
    betrag: function() {
      return this.hektarIDs.length * 10;
    },
    hektar: function() {
      return this.hektarIDs.length * 1;
    },
    hektarIDs: function() {
      var hektarIDs = [];
      if (this.selectedFeatures.length > 0) {
        this.selectedFeatures.forEach(element => {
          hektarIDs.push(element.properties.RasterID);
        });
        return hektarIDs;
      } else {
        return [];
      }
    }
  },
  methods: {
    more() {
      this.$emit("update:dialog", !this.dialog);
    },
    klick() {
      window.open(
        "https://naturerbe.nabu.de/spenden-und-helfen/patenschaften/include/formular/urwald.html?hektar-id="+
          this.hektarIDs +
          "&betrag=" +
          this.betrag
      );
      this.$emit("update:dialog", !this.dialog);
      this.$emit("update:selectedFeatures", this.selectedFeatures=[]);
    }
  }
};
</script>
