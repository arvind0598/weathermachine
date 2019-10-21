<template lang="pug">
  .hero.is-fullheight
    .hero-body
      .container
        .columns.is-vcentered
          .column
          .column
            weather-card
          .column
</template>

<script lang="ts">
import Vue from 'vue';
import WeatherCard from './components/WeatherCard.vue';
import getUserLocation from './scripts/getUserLocation';
import fetchWeatherData from './scripts/fetchWeatherData';

export default Vue.extend({
  data() {
    return {};
  },
  components: {
    WeatherCard,
  },
  beforeMount: () => {
    getUserLocation(fetchWeatherData, null);
  },
});
</script>

<style>
* {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
</style>
