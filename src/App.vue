<template>
  <h2 class="font-bold text-2xl mb-8 text-gray-600">Vue Counter animation</h2>
  <div
    class="
      card
      bg-gray-100
      rounded-xl
      p-8
      auto
      shadow-lg
      mx-auto
      w-1/3
      text-indigo-400
      font-bold
      text-xl
    "
  >
    <vue-counter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "App",
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
