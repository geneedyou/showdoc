<template>
  <div class="EditorIframe">
    <!-- <h1>{{ msg }}11</h1> -->
    <div
      ref="container"
      style="
        width: 100%;
        height: 500px;
        border: 0px solid grey;
        text-align: left;
      "
    ></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js"; // 包体很大了 但是demo可以跑起来

export default {
  name: "JavaIframe",
  props: {
    msg: String,
  },

  mounted: function () {
    monaco.editor.create(this.$refs.container, {
      value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join(
        "\n"
      ),
      language: "Java",
      // minimap: {
      //   enabled: false, //侧边栏预览
      // },
      // selectOnLineNumbers: true,
      // roundedSelection: false,
      // cursorStyle: "line", // 光标样式
      // automaticLayout: false, // 自动布局
      // glyphMargin: true, // 字形边缘
      // useTabStops: false,
      // fontSize: 16, // 字体大小
      // autoIndent: false, //自动布局
    });
  },

  methods: {
    clickfun() {},
  },
};
</script>

<style scoped>
</style>
