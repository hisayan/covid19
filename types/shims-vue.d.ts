import Vue from 'vue'
import { NuxtI18nSeo } from 'nuxt-i18n/types/vue'

declare module 'vue/types/vue' {
  interface Vue {
    $nuxtI18nSeo(): NuxtI18nSeo
  }
}
