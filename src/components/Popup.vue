<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="485">
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
            @click="$emit('update:dialog', false);"
          >Weitere Fläche wählen!</v-btn>
          <v-btn small color="rgb(118,184,40)" dark @click="klick">Jetzt Urwald-Paten werden!</v-btn>
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
  props: { dialog: Boolean, selected: Array },
  computed: {
    betrag: function() {
      return this.selected.length * 10;
    },
    hektar: function() {
      return this.selected.length * 1;
    }
  },
  methods: {
    klick() {
      window.open(
        "https://naturerbe.nabu.de/include/versteckt/sandkasten/urwald.html?hektar-id=" +
          this.selected +
          "&betrag=" +
          this.selected.length * 10
      );
      this.$emit("update:dialog", false);
    }
  }
};
</script>