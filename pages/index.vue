<template>
  <div class="homepage">
    <client-only>
      <video-background
        :src="heroVideo"
        :poster="heroPoster"
        :sources="[
          {src: 'sthlmestate-home.mp4', res: 900, autoplay: true},
          {src: 'sthlmestate-home.mp4', res: 638, autoplay: true, poster: heroPoster}
        ]"
        style="max-height: 900px; height: calc(100vh - 65px); filter: grayscale();"
        :overlay="$vuetify.theme.dark ? 'linear-gradient(0deg,#2a2a2a94,#272727)' : 'linear-gradient(0deg,#f4f0ed94,#f4f0ed)'"
      >
        <div class="content-inner">
          <img :src="$vuetify.theme.dark ? '/logo-stacked-dark-margin.svg' : '/logo-stacked-light-margin.svg'" class="logo-stacked-hero">
          <h1 :style="$vuetify.theme.dark ? 'color: var(--v-secondary-base)' : 'color: var(--v-primary-base)'">
            Hitta ditt drömhus i Stockholm
          </h1>
        </div>
      </video-background>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      hero: {
        video: {
          src: {
            desktop: '/sthlmestate-home-desktop.mp4',
            mobile: '/sthlmestate-home-mobile.mp4'
          }
        },
        poster: {
          src: {
            desktop: '/stockholm-desktop.jpg',
            mobile: '/stockholm-mobile.jpg'
          }
        }
      }
    }
  },
  computed: {
    heroVideo () {
      return this.$vuetify.breakpoint.smAndUp ? this.hero.video.src.desktop : this.hero.video.src.mobile
    },
    heroPoster () {
      return this.$vuetify.breakpoint.smAndUp ? this.hero.poster.src.desktop : this.hero.poster.src.mobile
    }
  }
}
</script>

<style lang="scss">
.logo-stacked-hero {
  width: 70%;
  max-width: 500px;
  height: auto;
  margin: 0 auto;
}
.content-inner {
  position: absolute;
  width: 80%;
  max-width: 650px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  * {
    text-align: center;
  }
}
.homepage {
  position: relative;
  .home-video {
    position: absolute;
    top: -65px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--v-secondary-base);
  }
}
</style>
