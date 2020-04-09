<template>
  <div class="Link">
    <h2 class="Link-Heading">
      新型コロナウイルス関連リンク
    </h2>
    <div v-for="(list, key) in urlList" :key="key">
      <TextCard :title="list.title">
        <ul class="Link-List">
          <li
            v-for="(item, i) in list.items"
            :key="i"
            :class="['Link-List-Item', { 'Link-List-border': item.divider }]"
          >
            <a
              class="Link-List-item-anchor"
              :href="item.url"
              target="_blank"
              rel="noopener"
            >
              <span class="Link-List-item-anchor-link">
                {{ item.text }}
                <v-icon
                  v-if="!isInternalLink(item.url)"
                  class="Link-List-item-ExternalLinkIcon"
                  size="12"
                >
                  mdi-open-in-new
                </v-icon>
              </span>
            </a>
          </li>
        </ul>
      </TextCard>
    </div>
  </div>
</template>

<script>
import urlList from '@/assets/url_list.json'
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  data() {
    return {
      urlList
    }
  },
  methods: {
    isInternalLink(path) {
      return !/^https?:\/\//.test(path)
    }
  },
  head() {
    return {
      title: '当サイトについて'
    }
  }
}
</script>

<style lang="scss">
.Link {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  & &-List {
    // セレクタ指定が&-Browser-List のみだと
    // .v-application ul の設定が勝ってしまい padding-left が24px となってしまうため
    // このようなセレクタ指定としています
    list-style: none;
    padding: 0;

    &-item {
      margin-top: 6px;
      &-anchor {
        display: flex;
        text-decoration: none;
        font-size: 14px;

        @include lessThan($medium) {
          flex-wrap: wrap;
        }

        &-link {
          flex: 0 1 auto;
          @include text-link();
          @include lessThan($medium) {
            padding-left: 0px;
          }
        }

        &-ExternalLinkIcon {
          margin-left: 2px;
          color: $gray-3 !important;
        }
      }
      &-note {
        text-decoration: none;
        font-size: 10px;

        @include lessThan($medium) {
          flex-wrap: wrap;
        }
      }
    }
    &-border {
      margin-bottom: 8px;
      padding-bottom: 8px;
      border-bottom: 1px solid $gray-4;
    }
  }
}
</style>
