<script>
import { mapState } from 'vuex'

export default {
  name: 'PageAbstract',
  computed: {
    ...mapState({
      navigator: 'navigator'
    })
  }
}
</script>
