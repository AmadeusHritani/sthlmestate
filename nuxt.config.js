// import colors from 'vuetify/es5/util/colors'
import core from './config/core'

// const hostname = process.env.NODE_ENV === 'production'
//   ? core.settings.baseUrl.prod
//   : core.settings.baseUrl.dev

// const API = process.env.NODE_ENV === 'production'
//   ? core.settings.api.prod
//   : core.settings.api.dev

// const squareEndPoint = process.env.NODE_ENV === 'production'
//   ? core.settings.square.prod.endpoint
//   : core.settings.square.test.endpoint

export default {
  render: {
    asynchScripts: true,
    http2: {
      push: true
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | ' + core.settings.title,
    title: core.settings.titleLong,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: core.settings.description || '' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: core.settings.appTitle || 'Sthlm Estate by SimHop' },
      { hid: 'og:title', name: 'og:title', property: 'og:title', content: core.settings.appTitle || 'Sthlm Estate by SimHop' },
      { hid: 'og:site_name', name: 'og:site_name', property: 'og:site_name', content: core.settings.appTitle || 'Sthlm Estate by SimHop' },
      { name: 'format-detection', content: 'telephone=no' },
      // { name: 'google-site-verification', content: core.settings.googleSiteVerification },
      // { name: 'dmca-site-verification', content: core.settings.dmcaSiteVerification }
    ],
    script: [
      // { src: `${squareEndPoint}`, defer: 'defer' },
      // { src: core.settings.googleOptimizeKey ? `'https://www.googleoptimize.com/optimize.js?id=${core.settings.googleOptimizeKey}` : null }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: '/fonts/fonts.css',
        media: 'screen',
        rel: 'stylesheet'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vue-video-background',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    pwa: {
      manifest: {
        short_name: core.settings.appTitle,
        name3g: core.settings.titleLong,
        icons: [
          {
            src: '/veutify-logo.svg',
            type: 'image/svg+xml',
            sizes: '512x512'
          },
          {
            src: '/icon.png',
            type: 'image/png',
            sizes: '192x192'
          }
        ],
        start_url: '/?source=pwa',
        background_color: '#1e1e1e',
        display: 'standalone',
        scope: '/',
        theme_color: '#21dc82',
        shortcuts: [
          {
            name: 'About Sthlm Estate',
            short_name: 'Sthlm Estate',
            description: 'Find out more about Sthlm Estate',
            url: '/about?source=pwa',
            icons: [{ src: '/icon.png', sizes: '192x192' }]
          }
        ],
        description: core.settings.description
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: false,
      icons: 'mdi'
    },
    breakpoint: {
      thresholds: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1600,
        xl: 1950
      },
      scrollBarWidth: 25
    },
    theme: {
      options: {
        customProperties: true,
        minifyTheme (css) {
          return process.env.NODE_ENV === 'production'
            ? css.replace(/[\r\n|\r|\n]/g, '')
            : css
        }
      },
      dark: core.settings.navigator.dark,
      themes: {
        light: {
          application: '#f1f1f1',
          sheet: '#FFFFFF',
          primary: core.theme.light.primary,
          accent: core.theme.light.accent,
          secondary: core.theme.light.secondary,
          info: core.theme.light.info,
          warning: core.theme.light.warning,
          error: core.theme.light.error,
          success: core.theme.light.success,
          us_red: '#BF0A30',
          us_blue: '#002868'
        },
        dark: {
          application: '#181818',
          sheet: '#191e20',
          primary: core.theme.dark.primary,
          accent: core.theme.dark.accent,
          secondary: core.theme.dark.secondary,
          info: core.theme.dark.info,
          warning: core.theme.dark.warning,
          error: core.theme.dark.error,
          success: core.theme.dark.success,
          us_red: '#d92044',
          us_blue: '#2164ef'
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    minifyCSS: true,
    minifyJS: true,
    html: {
      minifyCSS: false,
      minifyJS: false
    }
  }
}
