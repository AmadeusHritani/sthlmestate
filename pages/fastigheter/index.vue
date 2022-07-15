<template>
  <v-container class="pa-5">
    <v-row v-if="result" gutter="1">
      <v-col
        v-for="(item, i) in result.home_search.results"
        :key="i"
        cols="12"
        lg="4"
        xl="3"
        md="6"
      >
        <v-card color="secondary-darken1" class="primary-outlined" flat tile>
          <v-img v-if="item.primary_photo" :src="item.primary_photo.href" height="250" />
          <v-img v-else :src="`https://savannahquarters.com/wp-content/uploads/2020/12/placeholder-home.png`" height="250" />
          <v-list-item three-line class="pa-3">
            <v-list-item-content>
              <div style="font-size: .7rem;">
                By {{ item.branding[0].name }}
              </div>
              <div class="text-overline mb-4">
                {{ item.location.address.city }}
              </div>
              <v-list-item-title class="text-h5 mb-1">
                {{ item.location.address.line }}
              </v-list-item-title>
              <v-list-item-subtitle>
                Baths: {{ item.description.baths }} -
                Bedrooms: {{ item.description.beds }} -
                Area Size: {{ item.description.sqft }} -
                Price: {{ item.list_price / 100 }} USD
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="loading"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          Retrieving Properties from Rapid API
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PropertiesPage',
  data () {
    return {
      loading: true,
      result: null,
      options: {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/v2/for-sale',
        params: { offset: '0', limit: '100', state_code: 'MI', city: 'Detroit', sort: 'newest' },
        headers: {
          'X-RapidAPI-Key': '3bc6cbc9f3msh232f6402ee7be14p1cecaejsnf87356d115ea',
          'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
        }
      }
    }
  },
  created () {
    this.searchProperties()
  },
  methods: {
    async searchProperties () {
      let result = null
      this.loading = true
      await axios.request(this.options).then(function (response) {
        result = response ? response.data.data : null
      }).catch(function (error) {
        // eslint-disable-next-line no-console
        error ? console.error(error) : console.log('No error')
      })
      this.result = result
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
.primary-outlined {
  border: solid 2px var(--v-primary-base) !important;
}
</style>
