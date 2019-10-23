<template lang="pug">
  a(href='#' v-on:click.prevent="switchUnits").card-footer-item {{ convertString }}
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    isCelsius: Boolean,
  },
  data() {
    return {
      isCurrentCelsius: this.isCelsius,
    };
  },
  computed: {
    convertString(): string {
      return this.isCurrentCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius';
    },
  },
  methods: {
    switchUnits(): void {
      this.isCurrentCelsius = !this.isCurrentCelsius;
    },
  },
});
</script>
