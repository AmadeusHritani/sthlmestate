<template>
  <div class="deus-hero">
    <div
      :style="wrapperStyles"
      :class="wrapperClasses"
    >
      <div
        :style="contentWrapperStyle"
        class="deus-hero__content"
      >
        <div
          :style="symbolWrapperStyle"
          class="deus-hero__symbol"
        >
          <v-icon
            v-if="content.elements.symbol.type === 'icon'"
            :style="iconStyle"
            :color="content.elements.symbol.icon.color || '#ffffff'"
          >
            {{ content.elements.symbol.icon.mdi }}
          </v-icon>
          <img
            v-else
            :src="$vuetify.breakpoint.smAndDown ? content.elements.symbol.image.src.mobile : content.elements.symbol.image.src.desktop"
            :title="content.elements.heading.text"
            :style="imageStyle"
          >
        </div>
        <div class="deus-hero__text">
          <component
            :is="content.elements.heading.tag"
            :style="headingStyle"
            class="deus-hero__heading"
          >
            {{ content.elements.heading.text }}
          </component>
          <component
            :is="content.elements.subheading.tag"
            :style="subheadingStyle"
            class="deus-hero__subheading"
          >
            {{ content.elements.subheading.text }}
          </component>
          <component
            :is="content.elements.details.tag"
            :style="detailsStyle"
            class="deus-hero__details"
          >
            {{ content.elements.details.text }}
          </component>
          <div
            v-if="content.elements.actions.show"
            class="deus-hero__actions"
          >
            <v-btn
              :to="content.elements.actions.cta1.to"
            >
              {{ content.elements.actions.cta1.label }}
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeusHero',
  props: {
    settings: {
      type: Object,
      default () {
        return {
          height: 'calc(100vh - 65px)',
          width: 'full' // full|boxed
        }
      }
    },
    background: {
      type: Object,
      default () {
        return {
          hasImage: true,
          bgcolor: 'var(--v-primary-base)',
          position: 'center center',
          repeat: 'norepeat',
          size: 'cover',
          src: {
            desktop: '/stockholm-colored-desktop.jpg',
            mobile: '/stockholm-colored-mobile.jpg'
          },
          mono: true
        }
      }
    },
    content: {
      type: Object,
      default () {
        return {
          layout: {
            align: {
              desktop: 'center', // center|left|right
              mobile: 'center'
            },
            position: {
              desktop: 'middle', // middle|left|right,
              mobile: 'after' // after|before|inside ()
            },
            padding: {
              desktop: null, // default: 0
              mobile: null // default: 0
            }
          },
          elements: {
            symbol: {
              type: 'icon', // icon|image
              paddingY: {
                desktop: null, // default: 0
                mobile: null // default: 0
              },
              icon: {
                mdi: 'mdi-home-switch-outline',
                size: {
                  desktop: '7rem',
                  mobile: '5rem'
                },
                color: null // default: #ffffff. Or example: var(--v-secondary-base)
              },
              image: {
                src: {
                  desktop: '/icon.png',
                  mobile: '/icon.png'
                },
                width: {
                  desktop: '80%',
                  mobile: '70%'
                },
                maxWidth: {
                  desktop: '150px',
                  mobile: '100px'
                },
                height: {
                  desktop: 'auto',
                  mobile: 'auto'
                }
              }
            },
            heading: {
              tag: 'h1',
              text: 'Switch Your Home Now!',
              font: 'Barlow, Arial', // 'Barlow, Arial'|'Aleo, Georgia'
              weight: '100',
              size: {
                desktop: '3.5rem',
                mobile: '2.5rem'
              },
              color: 'var(--v-secondary-base)', // default: #ffffff. Or example: var(--v-secondary-base)
              paddingY: {
                desktop: null, // default: 0
                mobile: null // default: 0
              }
            },
            subheading: {
              tag: 'h2',
              text: 'Find your dream home in Stockholm',
              font: 'Barlow, Arial', // 'Barlow, Arial'|'Aleo, Georgia'
              weight: '300',
              size: {
                desktop: '2rem',
                mobile: '1.5rem'
              },
              color: 'var(--v-secondary-base)', // default: #ffffff. Or example: var(--v-secondary-base)
              paddingY: {
                desktop: null, // default: 0
                mobile: null // default: 0
              },
              position: 'before' // before|after
            },
            details: {
              tag: 'div',
              text: 'The short description you need goes here. Keep it short and to the point :)',
              font: 'Aleo, Georgia', // 'Barlow, Arial'|'Aleo, Georgia'
              weight: '400',
              size: {
                desktop: '.9rem',
                mobile: '.8rem'
              },
              color: 'var(--v-secondary-base)', // default: #ffffff. Or example: var(--v-secondary-base)
              paddingY: {
                desktop: null, // default: 0
                mobile: null // default: 0
              }
            },
            actions: {
              show: true,
              cta1: {
                show: true,
                label: 'Read more',
                to: '/',
                color: null, // default: '#ffffff'. Or example: var(--v-secondary-base)
                text: true,
                outlined: false,
                dark: false,
                tile: false,
                flat: false,
                raised: false,
                elevation: null,
                light: false,
                block: {
                  desktop: false,
                  mobile: true
                },
                floating: false,
                icon: false,
                showLoader: false,
                plain: false,
                rounded: true,
                size: {
                  desktop: 'large', // 'x-small'|'small'|'default'|'large'|'x-large'
                  mobile: 'default'
                },
                prepend: null,
                append: null
              },
              cta2: {
                show: false,
                label: 'Read more',
                to: '/',
                color: null, // default: '#ffffff'. Or example: var(--v-secondary-base)
                text: true,
                outlined: false,
                dark: false,
                tile: false,
                flat: false,
                raised: false,
                elevation: null,
                light: false,
                block: {
                  desktop: false,
                  mobile: true
                },
                floating: false,
                icon: false,
                showLoader: false,
                plain: false,
                rounded: true,
                size: {
                  desktop: 'large', // 'x-small'|'small'|'default'|'large'|'x-large'
                  mobile: 'default'
                }
              }
            }
          }
        }
      }
    }
  },
  computed: {
    imageStyle () {
      const width = (this.content &&
        this.content.elements.symbol)
        ? this.$vuetify.breakpoint.smAndDown
          ? this.content.elements.symbol.image.width.mobile
          : this.content.elements.symbol.image.width.desktop
        : ''
      let styles = width ? `width: ${width};` : ''

      const maxWidth = (this.content &&
        this.content.elements.symbol)
        ? this.$vuetify.breakpoint.smAndDown
          ? this.content.elements.symbol.image.maxWidth.mobile
          : this.content.elements.symbol.image.maxWidth.desktop
        : ''
      styles += maxWidth ? `max-width: ${maxWidth};` : ''

      const height = (this.content &&
        this.content.elements.symbol)
        ? this.$vuetify.breakpoint.smAndDown
          ? this.content.elements.symbol.image.height.mobile
          : this.content.elements.symbol.image.height.desktop
        : ''
      styles += height ? `height: ${height};` : ''

      return styles
    },
    contentWrapperStyle () {
      return ''
    },
    symbolWrapperStyle () {
      return ''
    },
    headingStyle () {
      const size = (this.content &&
        this.content.elements.heading)
        ? this.$vuetify.breakpoint.smAndDown
          ? this.content.elements.heading.size.mobile
          : this.content.elements.heading.size.desktop
        : ''
      let styles = size ? `font-size: ${size};` : ''

      const paddingY = (this.content &&
        this.content.elements.symbol)
        ? this.$vuetify.breakpoint.smAndDown
          ? this.content.elements.heading.paddingY.mobile
          : this.content.elements.heading.paddingY.desktop
        : ''
      styles += paddingY ? `padding: ${paddingY} 0;` : ''
      if (this.content.elements.heading && this.content.elements.heading.color) {
        styles += `color: ${this.content.elements.heading.color};`
      }
      if (this.content.elements.heading && this.content.elements.heading.weight) {
        styles += `font-weight: ${this.content.elements.heading.weight};`
      }
      if (this.content.elements.heading && this.content.elements.heading.font) {
        styles += `font-family: ${this.content.elements.heading.font};`
      }
      return styles
    },
    subheadingStyle () {
      const size = (this.content &&
        this.content.elements.subheading)
        ? this.$vuetify.breakpoint.smAndDown
          ? this.content.elements.subheading.size.mobile
          : this.content.elements.subheading.size.desktop
        : ''
      let styles = size ? `font-size: ${size};` : ''

      const paddingY = (this.content &&
        this.content.elements.symbol)
        ? this.$vuetify.breakpoint.smAndDown
          ? this.content.elements.subheading.paddingY.mobile
          : this.content.elements.subheading.paddingY.desktop
        : ''
      styles += paddingY ? `padding: ${paddingY} 0;` : ''
      if (this.content.elements.subheading && this.content.elements.subheading.color) {
        styles += `color: ${this.content.elements.subheading.color};`
      }
      if (this.content.elements.subheading && this.content.elements.subheading.weight) {
        styles += `font-weight: ${this.content.elements.subheading.weight};`
      }
      if (this.content.elements.subheading && this.content.elements.subheading.font) {
        styles += `font-family: ${this.content.elements.subheading.font};`
      }
      return styles
    },
    detailsStyle () {
      const size = (this.content &&
        this.content.elements.details)
        ? this.$vuetify.breakpoint.smAndDown
          ? this.content.elements.details.size.mobile
          : this.content.elements.details.size.desktop
        : ''
      let styles = size ? `font-size: ${size};` : ''

      const paddingY = (this.content &&
        this.content.elements.symbol)
        ? this.$vuetify.breakpoint.smAndDown
          ? this.content.elements.details.paddingY.mobile
          : this.content.elements.details.paddingY.desktop
        : ''
      styles += paddingY ? `padding: ${paddingY} 0;` : ''
      if (this.content.elements.details && this.content.elements.details.color) {
        styles += `color: ${this.content.elements.details.color};`
      }
      if (this.content.elements.details && this.content.elements.details.weight) {
        styles += `font-weight: ${this.content.elements.details.weight};`
      }
      if (this.content.elements.details && this.content.elements.details.font) {
        styles += `font-family: ${this.content.elements.details.font};`
      }
      return styles
    },
    iconStyle () {
      const size = (this.content &&
        this.content.elements.symbol &&
        this.content.elements.symbol.icon.size)
        ? this.$vuetify.breakpoint.smAndDown
          ? this.content.elements.symbol.icon.size.mobile
          : this.content.elements.symbol.icon.size.desktop
        : ''
      let styles = size ? `font-size: ${size};` : ''
      if (this.content.elements.symbol && this.content.elements.symbol.color) {
        styles += `color: ${this.content.elements.symbol.color});`
      }
      return styles
    },
    wrapperStyles () {
      let styles = this.settings.height ? `height: ${this.settings.height};` : ''
      if (this.background.hasImage && this.background.src.desktop) {
        const bg = this.$vuetify.breakpoint.smAndDown ? this.background.src.mobile : this.background.src.desktop
        styles += `background-image: url(${bg});`
      }
      if (this.background.bgcolor) {
        styles += `background-color: ${this.background.bgcolor};`
      }
      if (this.background.position) {
        styles += `background-position: ${this.background.position};`
      }
      if (this.background.size) {
        styles += `background-size: ${this.background.size};`
      }
      if (this.background.mono) {
        styles += 'filter: grayscale();'
      }
      return styles
    },
    wrapperClasses () {
      let classes = 'deus-hero__wrapper'
      if (this.settings.width === 'boxed') {
        classes += ' container'
      }
      return classes
    }
  }
}
</script>

<style lang="scss">
.deus-hero {
  * {
    line-height: 1;
  }
  &__wrapper {
    position: relative;
    height: calc(100vh - 65px);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 600px;
    padding: 20px 10px;
    text-align: center;
    color: #ffffff;
    background-color: rgba(0,0,0,.5);
    border: 2px solid #ffffff;
  }
  &__symbol {
    font-size: 3rem;
  }
  // &__text {
  //   max-width: 500px;
  // }
  &__heading {
    font-size: 2rem;
    padding: 10px 0;
  }
  &__subheading {
    font-size: 1.8rem;
    padding: 10px 0
  }
  &__details {
    font-size: .8rem;
    padding: 10px 0
  }
  &__actions {
    margin-top: 10px;
  }
}
</style>
