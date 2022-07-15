<template>
  <div class="page">
    Content Here...
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'SimpleWebsite',
  data: () => ({
    loading: false,
    selection: 1
  }),
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>
