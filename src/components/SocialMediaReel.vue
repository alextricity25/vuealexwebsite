<template>
  <div id="socialMediaReel" class="centerStageText socialMediaReel">
    <a href="http://blog.miguelalexcantu.com">
    <div id="bloggerButton" v-bind:class="'fab fa-blogger-b socialMediaButton ' + bloggerButtonClasses" v-on:mouseover="text='Blogger'" v-on:mouseout="text=''">
      <div v-bind:class="bloggerDownArrowClasses">
        ^
      </div>
    </div>
    </a>
    <a href="https://twitter.com/MiguelAlexCantu">
    <div id="twitterButton" v-bind:class="'fab fa-twitter socialMediaButton ' + twitterButtonClasses" v-on:mouseover="text='Twitter'" v-on:mouseout="text=''">
      <div v-bind:class="twitterDownArrowClasses">
        ^
      </div>
    </div>
    </a>
    <a href="https://www.instagram.com/miguelalexcantu/">
    <div id="instagramButton" v-bind:class="'fab fa-instagram socialMediaButton ' + instagramButtonClasses" v-on:mouseover="text='Instagram'" v-on:mouseout="text=''">
      <div v-bind:class="instagramDownArrowClasses">
        ^
      </div>
    </div>
    </a>
    <a href="https://github.com/alextricity25">
    <div id="githubButton" v-bind:class="'fab fa-github socialMediaButton ' + githubButtonClasses" v-on:mouseover="text='GitHub'" v-on:mouseout="text=''">
      <div v-bind:class="githubDownArrowClasses">
        ^
      </div>
    </div>
    </a>
    <a href="https://www.linkedin.com/in/miguelalexcantu/">
    <div id="linkedinButton" v-bind:class="'fab fa-linkedin-in socialMediaButton ' + linkedinButtonClasses" v-on:mouseover="text='LinkedIn'" v-on:mouseout="text=''">
      <div v-bind:class="linkedinDownArrowClasses">
        ^
      </div>
    </div>
    </a>
    <div class="belowText">
      {{ text }}
    </div>
  </div>
</template>


<script>
export default {
  name: 'socialmediareel',
  data: function () {
    return {
      bloggerButtonClasses: '',
      bloggerDownArrowClasses: 'downArrow',
      twitterButtonClasses: '',
      twitterDownArrowClasses: 'downArrow',
      instagramButtonClasses: '',
      instagramDownArrowClasses: 'downArrow',
      githubButtonClasses: '',
      githubDownArrowClasses: 'downArrow',
      linkedinButtonClasses: '',
      linkedinDownArrowClasses: 'downArrow',
      text: '',
    }
  },
  created () { 

    var counter = 0;
    //var socialMediaList = ['bloggerButtonClasses', 'twitterButtonClasses', 'instagramButtonClasses', 'githubButtonClasses', 'linkedinButtonClasses'];
    var socialMediaList = [
      { class: "bloggerButtonClasses", text: "Blogger" , downArrowClasses: "bloggerDownArrowClasses" },
      { class: "twitterButtonClasses", text: "Twitter", downArrowClasses: "twitterDownArrowClasses" },
      { class: "instagramButtonClasses", text: "Instagram", downArrowClasses: "instagramDownArrowClasses" },
      { class: "githubButtonClasses", text: "Github", downArrowClasses: "githubDownArrowClasses"},
      { class: "linkedinButtonClasses", text: "LinkedIn", downArrowClasses: "linkedinDownArrowClasses" }
    ]
    var switchActiveButton = () => {
      //Make sure all buttons are inactive
      socialMediaList.forEach(inactivate)
      //Calculate Index
      var index = counter % 5;
      //Change style to activate button
      this[socialMediaList[index].class] = "socialMediaButtonActive";
      this[socialMediaList[index].downArrowClasses] = "downArrow downArrowActive";
      this.text = socialMediaList[index].text;
      //Increment counter
      counter += 1;
      

    }

    //Inactivate all buttons
    var inactivate = (item) => {
      this[item.class] = '';
      this[item.downArrowClasses] = 'downArrow';
    }

    //Cycle through each button every five seconds
    setInterval(switchActiveButton, 3000);


  },
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
  height: 43px;
}

.socialMediaButton {
  display: inline-block;
  width: 20%;
  position: relative;
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
  opacity: 1;
  transform: scale(1.5);
}

.socialMediaButtonActive {
	color: #000;
  transform: scale(1.5);
}

.downArrow {
  opacity: 0;
}

.downArrowActive {
  opacity: 1;
}

.downArrow:hover {
  opacity: 1;
}

</style>
