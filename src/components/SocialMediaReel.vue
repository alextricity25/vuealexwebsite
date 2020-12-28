<template>
  <div id="socialMediaReel" class="centerStageText socialMediaReel">
    <div class="socialMediaButton fab fa-blogger-b">
    </div>
    <div class="socialMediaButton fab fa-twitter">
    </div>
    <div class="socialMediaButton fab fa-instagram">
    </div>
    <div class="socialMediaButton fab fa-github">
    </div>
    <div class="socialMediaButton fab fa-linkedin-in">
    </div>
  </div>
</template>


<script>
export default {
  name: 'nameplate',
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

.socialMediaReel {
  border: 1px solid;
  border-radius: 40px 40px 40px 40px;
  font-family: 'Staatliches', cursive;
  font-size: 25px;
  letter-spacing: 3px;
  word-spacing: 2px;
  color: #FFFFFF;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
  -webkit-text-stroke: .75px black;
}

.socialMediaButton {
  display: inline-block;
  width: 20%;
}

.fab, .fas {
	text-decoration: none;
	border-radius: 75%;
	color: #fff;
	transition: .1s ease-in-out;
	margin-top: 6px;
	margin-bottom: 6px;
}


.fab:hover, .fas:hover {
	color: #000;
}
</style>
