<template>
<div>
    <h2>Home page (from Landing Microapp)</h2>
    <button @click="go2AboutPage">Go to About</button>
</div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const go2AboutPage = () => router.push({ name: "about" })

</script>

<style>

</style>