<template>
  <div id="app">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="$route.meta.enablePullDownRefresh !== true">
      <keep-alive :include="$cachedViews">
        <router-view />
      </keep-alive>
    </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import appMixins from './libs/index'

@Component({
  mixins: [...appMixins]
})
export default class App extends Vue {}
</script>
