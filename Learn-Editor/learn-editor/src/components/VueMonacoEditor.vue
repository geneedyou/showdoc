<template>
  <div style="height: 500px">
    <h1>编辑器</h1>
    <h2>{{ initVar }}</h2>
    <div class="editor-container">
      <!-- 添加key是为了保证唯一值，防止第一次加载，后端请求的数据反显不到编辑器上 -->
      <!-- 还可添加language属性，让编辑器识别语言，例如language="sql" -->
      <MonacoEditor
        :code="code"
        :key="randomkey"
        :editorOptions="options"
        language="java"
        @mounted="onMounted"
        @codeChange="onCodeChange"
      >
      </MonacoEditor>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MonacoEditor from "vue-monaco-editor";

@Options({
  props: {
    msg: String,
  },
  components: {
    VueMonacoEditor,
    MonacoEditor,
  },
  data() {
    return {
      flag: "这是一个欢迎组件",
      msg: "这是一个欢迎组件",
      editor: null,
      code: "public class HelloWorld { public static void main(String []args) { System.out.println('Hello World'); } }",
      options: {
        selectOnLineNumbers: false,
      },
      randomkey: 1231231,
    };
  },
  beforeCreate() {
    console.log("实例刚刚被创建");
    this.initVar = "挂载成功,测试";
  },
  methods: {
    onMounted(editor: any) {
      this.editor = editor;
    },

    onCodeChange(editor: any) {
      console.log(this.editor.getValue());
    },
    // // createRamdomKey随机生成值，其值类似于id。该方法最为重要，在给code赋值之后，调用这个方法
    // createRamdomKey() {
    //   return Math.floor(Math.random() * Math.random());
    // },
    // getDetail() {
    //   // res为请求返回的值
    //   this.$nextTick(() => {
    //     // this.code = res.sourceFormula;
    //     this.randomkey = this.createRamdomKey();
    //   });
    // },
  },
})
export default class VueMonacoEditor extends Vue {
  msg?: string;
  editor?: null;
  code?: "public class HelloWorld { public static void main(String []args) { System.out.println('Hello World'); } }";
  options?: {
    selectOnLineNumbers: false;
  };
  randomkey?: 1231231;

  public initVar!: string;
  public mounted(): void {
    this.initVar = "挂载成功,测试";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.editor-container {
  height: 500px;
  width: 100%;
}
</style>
