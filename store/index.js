import core from '@/config/core'

export const state = () => ({
  navigator: core.settings.navigator,
  currentPage: null,
  user: null,
  loggedIn: false,
  loading: false,
  layout: {},
  categoriesError: {},
  breadcrumbs: {},
  breadcrumbsLocation: 'default',
  config: {},
  storePage: null,
  userTypes: [],
  notFound: false
})

export const mutations = {
  changePage (state, currentPage) {
    state.currentPage = currentPage
  }
}
