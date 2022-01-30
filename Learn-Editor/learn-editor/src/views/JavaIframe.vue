<template>
  <div>
    <h1>Java</h1>
    <VueMonacoEditor></VueMonacoEditor>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import VueMonacoEditor from "@/components/VueMonacoEditor.vue"; // @ is an alias to /src

@Options({
  components: {
    VueMonacoEditor,
  },
})
export default class JavaIframe extends Vue {}
</script>
