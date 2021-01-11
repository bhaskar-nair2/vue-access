<template>
  <div id="app">
    <!-- Title -->
    <h1 class="text-center my-10 font-semibold text-6xl">
      <span class="text-green-500">Vue&nbsp;</span>
      Access
    </h1>
    <p class="text-center">
      A VueJS plugin to manage user roles and access across your system.
    </p>
    <!-- Navs -->
    <div id="container mx-auto">
      <div class="flex justify-evenly mt-20 mb-10">
        <router-link
          active-class="border-b-4 border-purple-600"
          exact-active-class
          class="btn text-purple-500 bg-purple-100"
          to="/"
          >Actions</router-link
        >
        <router-link
          active-class="border-b-4 border-purple-600"
          exact-active-class
          class="btn text-purple-500 bg-purple-100"
          to="/components"
          >Components</router-link
        >
        <router-link
          active-class="border-b-4 border-purple-600"
          exact-active-class
          class="btn text-purple-500 bg-purple-100"
          to="/views"
          >Views</router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {},
};
</script>

<style></style>
