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
  // beforeCreate: function () {
  //   console.group("beforeCreate 创建前状态===============》");
  //   var state = {
  //     el: this.$el,
  //     data: this.$data,
  //     message: this.message,
  //   };
  //   console.log(state);
  // },
  // created: function () {
  //   console.group("created 创建完毕状态===============》");
  //   var state = {
  //     el: this.$el,
  //     data: this.$data,
  //     message: this.message,
  //   };
  //   console.log(state);
  // },
  // beforeMount: function () {
  //   console.group("beforeMount 挂载前状态===============》");
  //   var state = {
  //     el: this.$el,
  //     data: this.$data,
  //     message: this.message,
  //   };
  //   console.log(this.$el);
  //   console.log(state);
  // },
  mounted: function () {
    // console.group("mounted 挂载结束状态===============》");
    // var state = {
    //   el: this.$el,
    //   data: this.$data,
    //   message: this.message,
    // };
    // console.log(this.$el);
    // console.log(state);

    // var editor =
    monaco.editor.create(this.$refs.container, {
      value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join(
        "\n"
      ),
      language: "Java",
      minimap: {
        enabled: false, //侧边栏预览
      },
      selectOnLineNumbers: true,
      roundedSelection: false,
      cursorStyle: "line", // 光标样式
      automaticLayout: false, // 自动布局
      glyphMargin: true, // 字形边缘
      useTabStops: false,
      fontSize: 16, // 字体大小
      autoIndent: false, //自动布局
    });
  },
  // beforeUpdate: function () {
  //   console.group("beforeUpdate 更新前状态===============》");
  //   var state = {
  //     el: this.$el,
  //     data: this.$data,
  //     message: this.message,
  //   };
  //   console.log(this.$el);
  //   console.log(state);
  //   console.log(
  //     "beforeUpdate == " + document.getElementsByTagName("p")[0].innerHTML
  //   );
  // },
  // updated: function () {
  //   console.group("updated 更新完成状态===============》");
  //   var state = {
  //     el: this.$el,
  //     data: this.$data,
  //     message: this.message,
  //   };
  //   console.log(this.$el);
  //   console.log(state);
  //   console.log(
  //     "updated == " + document.getElementsByTagName("p")[0].innerHTML
  //   );
  // },
  methods: {
    clickfun() {
      // myVue.$destroy();
    },
  },
};
</script>

<style scoped>
</style>
