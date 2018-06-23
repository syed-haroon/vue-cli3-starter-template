<template lang="pug">
  .pin.pin-xy.d-flex.align-items-center
    .container
      .row
        .col-xl-10.mx-auto
          h2 Oops! Something is wrong
          p Please let us know how you got here, and use the button below to navigate
            |  back to safe harbor.
          <!--el-button(type="primary", @click="$router.push('/')") Go To Dashboard-->
</template>

<script>
import setBodyClassMb0 from '@/mixins';

export default {
  name: 'NotFoundView',
  mixins: [setBodyClassMb0],
};
</script>
