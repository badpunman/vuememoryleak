
<template>
  <div id="app">
    <button @click="createLeak()">Create leak $nextTick</button> 
    <br>
    <Leaker
      v-for="leak in leakComponents"
      @close="close(leak)"
      :key="leak"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      leakComponents: [],
      count: 0,
    };
  },
  methods: {
    close(leak) {
      this.leakComponents.splice(this.leakComponents.indexOf(leak));
    },
    createLeak() {
      this.leakComponents.push(this.count);      
      this.count++;
    }  
  },
  components: {
    Leaker: require("./Leaker.vue").default
  }
};
</script>
