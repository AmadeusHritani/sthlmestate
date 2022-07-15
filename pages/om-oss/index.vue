<template>
  <div class="page">
    <deus-hero :settings="localSettings" />
  </div>
</template>

<script>
import DeusHero from '~/components/cms/DeusHero.vue'
export default {
  name: 'AboutPage',
  components: { DeusHero },
  data () {
    return {
      localSettings: {
        height: 'calc(100vh - 65px)',
        width: 'full' // full|boxed
      }
    }
  }
}
</script>
