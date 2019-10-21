<template lang="pug">
  .card
    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder")
        .media-content
          p.title.is-4 The Weather Machine
          p.subtitle.is-6 {{ temperatureInfo }}
      .content {{ weatherInfo }}
        br
        br
      time(v-bind:datetime="currentDate") {{ currentDateTime}}
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
