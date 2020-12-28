<template>
  <div id="home" class="centerStage">
    <div class="centerStageText">
      <NamePlate />
    </div>
    <div>
      <SocialMediaReel />
    </div>
    <div>
      <AlexNews />
    </div>
  </div>
</template>


<script>
import NamePlate from './NamePlate.vue';
import SocialMediaReel from './SocialMediaReel.vue';
import AlexNews from './AlexNews.vue';

export default {
  components: {
    NamePlate,
    SocialMediaReel,
    AlexNews
  },
  name: 'home',
  data: function () {
    return {
      claims: '',
      resourceServerExamples: [
        {
          label: 'Node/Express Resource Server Example',
          url: 'https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server'
        },
        {
          label: 'Java/Spring MVC Resource Server Example',
          url: 'https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server'
        }
      ]
    }
  },
  created () { },
  methods: {
    async setup () {
    },
  }
}
</script>
