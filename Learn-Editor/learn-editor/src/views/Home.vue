<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <java-iframe></java-iframe>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import JavaIframe from "./JavaIframe.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    JavaIframe,
  },
})
export default class Home extends Vue {}
</script>
