<template>
  <v-app-bar
    :clipped-left="clipped"
    :fixed="sticky"
    :app="sticky"
    :elevation="sticky && !hasHero ? 1 : 0"
  >
    <v-container class="d-flex pa-0">
      <v-toolbar-title class="ps-0" style="display: contents;">
        <div
          class="logo-link"
          title="Sthlm Estate"
          @click="$router.push('/')"
        >
          <img
            max-height="70"
            max-width="90"
            router
            title="SimHop"
            class="logo"
            :src="$vuetify.theme.dark ? '/logo-linear-dark-nomargin.svg' : '/logo-linear-light-nomargin.svg'"
          >
        </div>
      </v-toolbar-title>
      <v-spacer class="d-none d-md-flex" />
      <v-btn
        v-for="(item, index) in navigator.top.items"
        :key="index"
        :to="item.slug"
        :title="item.title"
        router
        exact
        text
        class="align-self-center d-none d-md-flex menu-link"
      >
        {{ item.label }}
      </v-btn>
      <v-spacer />
      <v-btn
        icon
        :color="sticky ? 'success' : 'default'"
        class="d-none d-sm-block"
        @click.stop="$emit('toggle-sticky')"
      >
        <v-icon>mdi-align-vertical-top</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-app-bar-nav-icon
        class="d-md-none"
        @click.stop="$emit('toggle-drawer')"
      />
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'DeusAppBar',
  props: {
    hasHero: {
      type: Boolean,
      default: true
    },
    clipped: {
      type: Boolean,
      default: true
    },
    sticky: {
      type: Boolean,
      default: true
    },
    navigator: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.v-btn.menu-link {
    background: none !important;
    background-color: transparent !important;
    border-radius: 0;
    .v-ripple__container {
      display: none;
    }
    &:before {
      width: 0;
      opacity: 1;
      background: none !important;
      background-color: transparent !important;
      border-radius: 0;
      margin: 0 auto;
      top: 0;
      bottom: 0;
      color: inherit;
      transition: width .2s ease;
      transition-delay: .2s;
      // animation: line .5s linear forwards;
    }
    &:hover {
      transition: width 5s ease;
    }
    &:hover::before {
      border-bottom: 1px solid var(--v-primary-base);
      width: calc(100% - 32px);
      opacity: 1;
    }
  }

.theme--light.menu-link.v-btn--active:hover::before,
.theme--light.menu-link.v-btn--active::before {
    border-bottom: 2px solid var(--v-primary-base);
    width: calc(100% - 32px);
    opacity: 1;
}
.theme--dark.menu-link.v-btn--active:hover::before,
.theme--dark.menu-link.v-btn--active::before {
    border-bottom: 2px solid var(--v-secondary-base);
    width: calc(100% - 32px);
    opacity: 1;
}
.theme--light.v-application {
  .v-btn.menu-link {
    color: var(--v-primary-base);
    // &:before {
    //   opacity: 1;
    //   background-color: transparent;
    //   border-radius: 0;
    //   width: calc(100% - 32px);
    //   margin: 0 auto;
    //   top: 0;
    //   bottom: 0;
    //   color: inherit;
    //   animation: line 2s linear forwards;
    // }
  }
}
.theme--dark.v-application {
  .v-btn.menu-link {
    color: var(--v-secondary-base);
    // &:before {
    //   opacity: 1;
    //   background-color: transparent;
    //   border-radius: 0;
    //   padding: 0 16px !important;
    //   margin: 0 auto;
    //   top: 0;
    //   bottom: 0;
    //   color: inherit;
    //   transition: width .5s ease-in-out;
    //   // animation: line .5s linear forwards;
    // }
  }
}
@keyframes line {
  from {
    width:0%;
  }
  to {
    width: calc(100% - 32px);
  }
}
</style>
