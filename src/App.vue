<template lang="html">
    <div>
        <h1> The Weather Machine </h1>
        <sample-component/>
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
/* body {
    background: red;
} */
</style>
