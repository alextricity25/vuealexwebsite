<template>
  <div class="hello">
    <div class="namePlate">
      <h1 class="firstName">MIGUEL</h1>
      <h1 class="mLastName">ALEX CANTU</h1>
      <SocialMediaRibbon />
    </div>
  </div>
</template>

<script>
import SocialMediaRibbon from './SocialMediaRibbon.vue';

export default {
  name: 'NamePlate',
  components: {
    SocialMediaRibbon
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  top: 50%;
  position: relative;
  color: #d2e7fc;
  font-size: 2.5em;
  text-shadow: 0px 0px 5px #070202;
  margin: 0px;
}

.firstName {
	text-align: left;
	padding-left: 21px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.namePlate {
	position: relative;
	width: 350px;
	left: 50%;
	margin-left: -175px;
} 

.hello {
	position: relative;
	top: 50%
}
</style>
