<template>
  <div class="container pb-20 xl:w-2/3 2xl:w-2/3">
    <h4 class="text-2xl mb-4 text-blue-600">
      Using action with <code class="text-gray-600">entityBased=false</code>
    </h4>
    <p class="text-xl text-blue-600 mb-4">
      Entity: <code class="text-gray-600">null</code>
    </p>
    <template>
      <section
        v-access:auth.invert
        v-access:view="'view'"
        class="container py-10 rounded-xl border-2 border-blue-900 grid grid-cols-4"
      >
        <div class="flex flex-col items-center">
          <code class="small-code">access='imgAccess'</code>
          <div v-access:comp="'imgAccess'" class="sample-box">
            <img src="https://picsum.photos/id/237/200/300" />
          </div>
        </div>
        <div class="flex flex-col items-start col-span-2">
          <code class="small-code">access='textAccess'</code>
          <div v-access:comp="'textAccess'">
            <h4 class="text-2xl">Demo Name</h4>
            <span class="text-md">Subtitle</span>
            <p class="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>
          <code class="small-code mt-2">access='buttonAccess'</code>
          <div
            v-access:comp="'buttonAccess'"
            class="flex border-2 border-gray-50 py-2"
          >
            <div class="flex flex-col">
              <code class="small-code">access='editAccess'</code>
              <button
                v-access:action="'editAccess'"
                type="button"
                @click="defaultAction"
                class="btn bg-yellow-100 text-yellow-600"
              >
                Edit
              </button>
            </div>
            <div class="flex flex-col ml-2">
              <code class="small-code">access='deleteAccess'</code>
              <button
                v-access:action="'deleteAccess'"
                type="button"
                @click="defaultAction"
                class="btn bg-red-100 text-red-800 "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({}),
  methods: {
    defaultAction() {
      alert("I am Active");
    },
  },
};
</script>

<style lang="css"></style>
