<template lang="pug">
  .about.py-5
    h1 This is an about page
    img(src='../assets/logo.png')
    hello-world(msg='Welcome to Your Vue.js App')
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: { HelloWorld },
};
</script>
