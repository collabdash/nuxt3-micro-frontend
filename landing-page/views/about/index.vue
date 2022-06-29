<template>
<div>
    <h2>About page (from Landing Microapp)</h2>
    <button @click="go2HomePage">Go to Home</button>
</div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const go2HomePage = () => router.push({ name: "home" })

</script>

<style>

</style>