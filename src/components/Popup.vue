<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="525">
      <v-card>
        <v-card-title
          class="headline"
        >Ja, ich werde Urwald-Pate für {{this.selected.length*10}} Hektar</v-card-title>

        <v-card-text>Ich schütze mit ({{this.selected.length}} mal 10) Euro monatlich Urwald von morgen im Biesenthaler Becken.</v-card-text>

        <v-card-actions>
          <div class="flex-grow-1"></div>

          <v-btn
            color="grey lighten-1"
            @click="$emit('update:dialog', false);"
          >Weitere Fläche wählen!</v-btn>

          <v-btn color="#4de600" @click="klick">Jetzt Urwald-Paten werden!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: { dialog: Boolean, selected: Array },
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