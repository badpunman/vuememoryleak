<template>
  <div v-if="loading">loading</div>
  <div v-else>{{bigdata}}</div>
</template>
<script>
import { mapState } from "vuex";

//eslint-disable-next-line
function generate_random_data(size) {
  return new Blob([new ArrayBuffer(size)], {
    type: "application/octet-stream"
  });
}

export default {    
  data() {
    return {
      loading: true,
      bigdata: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      // Access a vuex property once
      // eslint-disable-next-line no-unused-vars
      let a = this.foo;
      // Store something big to demonstrate
      this.bigdata = generate_random_data(10000000).arrayBuffer();
      // Manipulate render template
      this.loading = false;
    });
    this.$emit("close");
  },
  computed: {
    ...mapState({
      foo: state => state.foo
    })
  }
};
</script>