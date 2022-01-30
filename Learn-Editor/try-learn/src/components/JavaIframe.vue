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
// https://zhuanlan.zhihu.com/p/47746336
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution"; //javascript语法高亮
import "monaco-editor/esm/vs/editor/contrib/find/findController.js"; //引入查找控件。
import * as monaco from "monaco-editor/esm/vs/editor/editor.api"; // 包体很大了 但是demo可以跑起来
// import * as monaco from 'monaco-editor/esm/vs/editor/editor.main.js';//自动带上所有的内置语言和控件，唯一的缺点就是包的体积过大。

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
      language: "javascript",
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
      theme: "vs-dark",
    });
  },

  methods: {
    clickfun() {},
  },
};
</script>

<style scoped>
</style>
