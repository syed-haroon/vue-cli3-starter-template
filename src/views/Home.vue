<template lang="pug">
  .home
    h1.mt-5 Sticky footer with fixed navbar
    p.lead
      | Pin a fixed-height footer to the bottom of the viewport in desktop browsers
      | with this custom HTML and CSS. A fixed navbar has been added with
      code padding-top: 60px;
      |  on the
      code body > .container
      | .
    p
      | Back to &nbsp;
      a(href='../sticky-footer') the default sticky footer
      |  minus the navbar.
</template>

<script>
export default {
  name: 'home',
};
</script>
