<template>
  <div>
    Main Layout
    <br>
    store data
    <br>
    {{ store.$state }}
    <br>
    <div id="subapp"></div>
  </div>
</template>

<script lang="ts" setup>
import {
  registerMicroApps,
  start
} from 'qiankun'

import { useStore } from '@/stores/store'
import { onMounted } from 'vue';

const store = useStore()

onMounted( () => {
  registerMicroApps(store.apps as any)

  start()
})

</script>
