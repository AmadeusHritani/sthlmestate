<template>
  <v-app dark>
    <deus-app-drawer v-if="$vuetify.breakpoint.smAndDown" :navigator="navigator" :drawer="drawer" @toggle-drawer="drawer = $event" />
    <deus-app-bar :navigator="navigator" :sticky="sticky" :clipped="clipped" @toggle-sticky="sticky = !sticky" @toggle-drawer="drawer = !drawer" />
    <v-main>
      <v-scroll-x-transition>
        <Nuxt />
      </v-scroll-x-transition>
      <!-- <v-container>
        <v-row>
          <v-col class="text-center">
            <v-card
              :loading="loading"
              class="mx-auto my-3"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                />
              </template>
              <v-responsive :aspect-ratio="16/9">
                <v-card-title v-if="$route.path !== '/'">
                  <h1 class="display-1 primary-color">
                    {{ currentPage.title || 'Go Sthlm Estate!' }}
                  </h1>
                </v-card-title>
                <v-divider v-if="$route.path !== '/'" class="mx-4" />
                <v-card-title v-if="$route.path !== '/'">
                  {{ currentPage.short_desc || 'Get started hunting estates :)' }}
                </v-card-title>
                <Nuxt />
              </v-responsive>
            </v-card>
          </v-col>
        </v-row>
      </v-container> -->
    </v-main>
    <v-footer
      :absolute="fixed"
      app
      paddless
    >
      <v-container class="text-center">
        <span>Sthlm Estate &copy; {{ new Date().getFullYear() }}</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DefaultLayout',
  components: {
    DeusAppBar: () => import('@/components/layout/DeusAppBar.vue'),
    DeusAppDrawer: () => import('@/components/layout/DeusAppDrawer.vue')
  },
  data () {
    return {
      loading: false,
      sticky: true,
      clipped: true,
      drawer: false,
      fixed: true,
      right: true,
      title: 'Sthlm Estate by Deus',
      currentPage: {},
      paths: []
    }
  },
  computed: {
    ...mapState({
      navigator: 'navigator'
    })
  },
  watch: {
    $route (to, from) {
      this.currentPage = this.getCurrentPage(to)
    }
  },
  created () {
    this.drawer = false
    this.sticky = this.navigator.sticky
    this.clipped = this.navigator.clipped
    this.fixed = this.navigator.fixed
    this.right = this.navigator.right
    this.title = this.navigator.title
    this.currentPage = this.getCurrentPage(this.$route)
  },
  methods: {
    getCurrentPage (route) {
      let page = {}
      const paths = route.path.split('/')
      this.paths = paths
      const items = this.navigator.top.items
      for (let i = 0; i < items.length; i++) {
        const slug = items[i].slug
        if ((paths[1] && slug === `/${paths[1]}`) ||
          (paths[2] && slug === `/${paths[1]}/${paths[2]}`) ||
          (paths[3] && slug === `/${paths[1]}/${paths[2]}/${paths[3]}`)) {
          page = items[i]
        }
      }
      if (!page.id) {
        page = items[0]
      }
      this.$store.commit('changePage', page)
      return page
    }
  }
}
</script>

<style lang="scss">
body,
.v-application {
  font-family: Aleo, Serif;
}

.v-btn,
footer {
  font-family: Barlow, Arial;
}

.logo-link {
  cursor: pointer;
  display: inherit;
  max-height: 50px;
  max-width: 120px;
  align-self: center;
  position: relative;
  .logo {
    width: 100%;
    height: auto;
  }
}
.container.d-flex {
  img {
    max-height: 50px;
    max-width: 250px;
    align-self: center;
  }
}

.primary-color {
  color: var(--v-primary-base);
}

// .theme--dark.v-footer {
//     background-color: #0e1017 !important;
//     color: #eae6da;
// }
// .theme--light.v-footer {
//     background-color: transparent !important;
//     color: var(--v-primary-darken4);
// }

.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: var(--v-secondary-base) !important;
}

// .theme--dark.v-card {
//     background-color: var(--v-primary-base) !important;
//     color: #eae6da;
// }

// .theme--dark.v-application {
//     background: var(--v-primary-darken3);
//     background-image: initial;
//     background-position-x: initial;
//     background-position-y: initial;
//     background-size: initial;
//     background-repeat: initial;
//     background-attachment: initial;
//     background-origin: initial;
//     background-clip: initial;
//     background-color: var(--v-primary-darken3);
//     color: #eae6da;
// }

@media (max-width: 992px) {
  .container.d-flex {
    img {
      max-height: 35px;
      align-self: center;
      max-width: fit-content;
    }
  }
}
</style>
