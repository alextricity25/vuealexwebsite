<template>
  <div id="app">
    <div class="ui inverted top fixed menu stackable">
      <div class="ui container">
        <router-link
          to="/"
          class="header item"
        >
          <img
            class="ui mini image"
            src="./assets/logo.png"
          >
          &nbsp;
          M.A.C.
        </router-link>
        <router-link
          to="/about-me"
          class="item"
          id="about-me-button"
        >
          <i
            aria-hidden="true"
            class="outline">
          </i>
          About Me
        </router-link>
      </div>
    </div>
    <div
      class="ui text container"
      style="margin-top: 7em;"
    >
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
  }
}
</script>
