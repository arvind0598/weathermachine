<template lang="html">
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
              <div class="column"></div>
              <div class="column">
                <sample-component/>
              </div>
              <div class="column"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SampleComponent from './components/SampleComponent.vue';
import getUserLocation from './scripts/getUserLocation';
import fetchWeatherData from './scripts/fetchWeatherData';

export default Vue.extend({
  data() {
    return {};
  },
  components: {
    SampleComponent,
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
