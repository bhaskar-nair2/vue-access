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
        <router-link class="btn" to="/">Demo-1</router-link>
        <router-link class="btn" to="/">Demo-2</router-link>
        <router-link class="btn" to="/">Demo-3</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style></style>
