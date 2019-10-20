<template lang="html">
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">The Weather Machine</p>
          <p class="subtitle is-6">{{ temperatureInfo }}</p>
        </div>
      </div>

      <div class="content">
        {{ weatherInfo }}
        <br/><br/>
        <time v-bind:datetime="currentDate"> {{ currentDateTime }} </time>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      temperatureInfo: 'Grant Location permissions.',
      weatherInfo: 'Seems to be pretty cloudy. Gib permission.',
    };
  },
  computed: {
    currentDate() {
      return new Date().toISOString().slice(0, 10);
    },
    currentDateTime() {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      return `${this.currentDate}, ${currentTime}`;
    },
  },
});
</script>
