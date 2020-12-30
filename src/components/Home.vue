<template>
  <div id="home" class="centerStage">
    <div class="centerStageText">
      <NamePlate />
    </div>
    <div>
      <SocialMediaReel />
    </div>
  </div>
</template>


<script>
import NamePlate from './NamePlate.vue';
import SocialMediaReel from './SocialMediaReel.vue';

export default {
  components: {
    NamePlate,
    SocialMediaReel,
  },
  name: 'home',
  data: function () {
    return {
    }
  },
  created () { },
  methods: {
    async setup () {
    },
  }
}
</script>
