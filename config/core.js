export default {
  settings: {
    title: 'Sthlm Estate',
    titleLong: 'Sthlm Estate | Real Estate Lead Management',
    appTitle: 'Sthlm Estate',
    description: 'Sthlm Estate | Real Estate Lead Management: Generate leads by connecting to external APIs.',
    navigator: {
      dark: false,
      sticky: true,
      clipped: true,
      drawer: false,
      fixed: true,
      right: true,
      top: {
        title: 'Sthlm Estate',
        items: [
          {
            id: 1,
            slug: '/',
            label: 'Hem',
            title: 'Sthlm Estate Hemsida',
            short_desc: 'Explore properties for sale and rent',
            icon: 'mdi-home-variant-outline'
          },
          {
            id: 2,
            slug: '/fastigheter',
            label: 'Till Salu',
            title: 'Alla Fastigheter',
            short_desc: 'Utforska fastigheter till salu',
            icon: 'mdi-home-group'
          },
          {
            id: 3,
            slug: '/om-oss',
            label: 'Om Oss',
            title: 'Om Sthlm Estate',
            short_desc: 'Information Om Sthlm Estate',
            icon: 'mdi-information-variant'
          },
          {
            id: 4,
            slug: '/kontakt',
            label: 'Kontakt Oss',
            title: 'Kontakt Sthlm Estate',
            short_desc: 'Explore properties for rent',
            icon: 'mdi-send-outline'
          }
        ]
      },
      side: {
        title: 'Sthlm Estate',
        items: []
      }
    },
    googleApiKey: {
      test: 'AIzaSyDkQnW0MDECV62ogv2MrtZ2GbewAHkgqhY',
      prod: 'AIzaSyAs_AdPT-fLX4caeBA4ij9VgNm7cr90KuY'
    },
    googleSiteVerification: 'your_google_site_verification',
    googleOptimizeKey: null,
    dmcaSiteVerification: 'your_dmca_site_verification',
    baseUrl: {
      prod: 'https://sthlmestate.se/',
      dev: 'http://localhost:3000/'
    },
    api: {
      prod: 'https://us-real-estate.p.rapidapi.com/v2',
      dev: 'https://us-real-estate.p.rapidapi.com/v2'
    },
    stripeKey: {
      prod: 'prod_stripe_key_here',
      test: 'test_stripe_key_here'
    },
    square: {
      prod: {
        applicationId: 'prod-application_id',
        token: 'prod_long_token',
        locationId: 'prod_location_id',
        endpoint: 'https://js.squareupsandbox.com/v2/paymentform',
        apiEndpoint: 'https://connect.squareupsandbox.com'
      },
      test: {
        applicationId: 'sandbox-application_id',
        token: 'sandbox_long_token',
        locationId: 'sandbox_location_id',
        endpoint: 'https://js.squareupsandbox.com/v2/paymentform',
        apiEndpoint: 'https://connect.squareupsandbox.com'
      }
    },
    fileRoles: [
      {
        id: 1,
        value: 'card-image',
        label: 'Card Image'
      },
      {
        id: 2,
        value: 'hero-image',
        label: 'Hero image'
      },
      {
        id: 3,
        value: 'document',
        label: 'Document'
      }
    ]
  },
  api: {
    resources: {}
  },
  theme: {
    light: {
      primary: '#121212',
      accent: '#cfbf99',
      secondary: '#f4f0ed',
      info: '#085A8C',
      warning: '#F7931E',
      error: '#D60032',
      success: '#65B32E'
    },
    dark: {
      primary: '#999999',
      accent: '#cfbf99',
      secondary: '#f4f0ed',
      info: '#085A8C',
      warning: '#F7931E',
      error: '#D60032',
      success: '#65B32E'
    }
  }
}
