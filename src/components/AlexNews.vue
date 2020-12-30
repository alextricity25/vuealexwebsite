<template>
  <div id="alexNews" class="alexNews centerStageText">
    <div class="alexNewsPhoto">
      <img src="https://www.dropbox.com/s/uhid42vb8qk64pw/2020-12-28%2012.54.16.jpg?raw=1" width=150px height=150px>
    </div>
    <div class="alexNewsText">
      #flowers
    </div>
  </div>
</template>


<script>
export default {
  name: 'alexNews',
  data: function () {
    return {
    }
  },
  created () { },
  methods: {
    async setup () {
    },
    getInstaData () {

    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

.alexNews  {
}

.alexNewsPhoto {
  display: inline-block;
  margin-top: 10px;
}

.alexNewsText {
  display: inline-block;
  vertical-align: top;
  font-family: 'Staatliches', cursive;
  font-size: 18px;
  color: #FFFFFF;
  -webkit-text-stroke: .75px black;
  padding: 20px;

}

.namePlate {
  letter-spacing: 3px;
  word-spacing: 2px;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: uppercase;
}
</style>
