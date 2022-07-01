<template>
  <div>
    <header class="title">Main App</header>
    
    <h2> Apps </h2>
    {{ apps }}

    <div id="subapp"></div>
  </div>
</template> 


<script lang="ts" setup>
import { useStore } from '@/store/store'
import { onMounted } from 'vue';
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
} from 'qiankun'

const store = useStore()

const apps = store.apps

onMounted(async () => {
      console.log(apps)
      // register all child apps 
      registerMicroApps (apps) 
      // Set the default active sub-application 
      setDefaultMountApp (apps[0].activeRule ) 
      // start 
      start () 
})

</script>


<style>
.title {
  text-align: center;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
  
</style>