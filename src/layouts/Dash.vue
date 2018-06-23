<template lang="pug">
  div
    app-header
    main.container(role="main")
      router-view
    app-footer
</template>

<script>
import AppHeader from '@/components/partials/AppHeader.vue';
import AppFooter from '@/components/partials/AppFooter.vue';

export default {
  name: 'DashView',
  components: { AppHeader, AppFooter },
};
</script>
