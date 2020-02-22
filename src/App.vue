<template>
  <div id="app" class="sticky-container">
    <img width="25%" src="./assets/logo.png">
    <div v-sticky sticky-side="top" class="test-div">This is a test sticky</div>
    <HelloWorld msg="Hello Vue in CodeSandbox!"/>
    <div class="big-div">Oh hello there</div>
  </div>
</template>

<script>
import Sticky from "vue-sticky-directive";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  directives: {
    Sticky
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
.big-div {
  height: 10000px;
}

.test-div {
  width: 100%;
  background-color: teal;
  padding: 25px 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
