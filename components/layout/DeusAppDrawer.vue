<template>
  <v-navigation-drawer
    v-model="showDrawer"
    :width="$vuetify.breakpoint.mdAndUp ? '350px' : '85%'"
    :clipped="clipped"
    :fixed="fixed"
    :right="right"
    temporary
    app
  >
    <!-- <v-list
      subheader
      three-line
    >
      <v-subheader>User Controls</v-subheader>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Content filtering</v-list-item-title>
          <v-list-item-subtitle>Set the content filtering level to restrict appts that can be downloaded</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Password</v-list-item-title>
          <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list
      flat
      subheader
      three-line
    >
      <v-subheader>General</v-subheader>

      <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
        <v-list-item>
          <template #default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active" />
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template #default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active" />
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template #default="{ active }">
            <v-list-item-action>
              <v-checkbox :input-value="active" />
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list> -->
    <v-list>
      <v-list-item
        v-for="(item, i) in navigator.top.items"
        :key="i"
        :to="item.slug"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DeusAppDrawer',
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
    clipped: {
      type: Boolean,
      default: true
    },
    fixed: {
      type: Boolean,
      default: true
    },
    right: {
      type: Boolean,
      default: false
    },
    navigator: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      showDrawer: false,
      settings: [],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Desktop',
          to: '/'
        },
        {
          icon: 'mdi-sitemap-outline',
          title: 'Simple Website',
          to: '/simple-website'
        },
        {
          icon: 'mdi-wan',
          title: 'Advanced CMS',
          to: '/advanced-cms'
        },
        {
          icon: 'mdi-cart',
          title: 'Simple Store',
          to: '/simple-store'
        },
        {
          icon: 'mdi-store-cog',
          title: 'Advanced Store',
          to: '/advanced-store'
        }
      ],
      title: 'Sthlm Estate'
    }
  },
  watch: {
    drawer (drawer) {
      this.showDrawer = drawer
    },
    showDrawer (showDrawer) {
      this.$emit('toggle-drawer', showDrawer)
    }
  }
}
</script>

<style lang="scss">
.theme--dark.v-navigation-drawer {
    background-color: var(--v-secondary-base);
    .v-list-item--link:before {
        background-color: var(--v-secondary-darken3);
    }
}
.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled),
.theme--dark.v-icon {
    color: var(--v-primary-base);
}
</style>
