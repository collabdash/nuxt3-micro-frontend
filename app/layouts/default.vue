<template>
  <div>
    Main Layout
    <br>
    store data
    <br>
    {{ store.$state }}
    <br>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/store'

const store = useStore()

</script>
