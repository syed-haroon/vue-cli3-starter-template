<template lang="pug">
  header
    nav.navbar.navbar-expand-md.navbar-dark.fixed-top.bg-primary
      router-link.navbar-brand(to="/") Staffbook
      button.navbar-toggler(
        type="button",
        data-toggle="collapse",
        data-target="#navbarCollapse",
        aria-controls="navbarCollapse",
        aria-expanded="false",
        aria-label="Toggle navigation"
      )
        span.navbar-toggler-icon
      #navbarCollapse.collapse.navbar-collapse
        ul.navbar-nav.ml-auto
          router-link.nav-item(tag="li", to="/", active-class="active", exact)
            a.nav-link Home
          router-link.nav-item(tag="li", to="/about", active-class="active", exact)
            a.nav-link About
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>
