<template>
  <div
    class="container mx-auto flex justify-evenly bg-blue-100 py-10 rounded-xl w-2/3"
  >
    <div
      v-for="(obj, index) in testObjs"
      :key="index"
      class="sample-box border-green-800 text-green-600 "
      v-access:action="obj.access"
    >
      {{ obj.access }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data: () => ({
    testObjs: [
      {
        access: "access1",
      },
      {
        access: "access2",
      },
      {
        access: "access3",
      },
      {
        access: "access4",
      },
    ],
  }),
};
</script>
