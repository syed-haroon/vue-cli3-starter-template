<template lang="pug">
  div.d-flex.min-h-100vh.bg-dark
    .container.d-flex
      .row.align-items-center.flex-1
        .col-md-6.col-lg-5.col-xl-4.mx-auto
          h1.text-center.text-white Staffbook
          .card.border-0
            .card-body.pt-0.text-center
              .py-4.text-muted
                h4.mb-0 Welcome Back!
                p.mb-0 Please login to your Dashboard
              <!--el-form(:model='login', status-icon)-->
                <!--el-form-item(prop='email')-->
                  <!--el-input(v-model='login.email', auto-complete='off', placeholder="Email")-->
                <!--el-form-item(prop='password')-->
                  <!--el-input(-->
                    <!--type='password', -->
                    <!--v-model='login.password', -->
                    <!--auto-complete='off', -->
                    <!--placeholder="Password"-->
                  <!--)-->
                <!--el-form-item.mb-0-->
                  <!--el-button(type='primary', @click="submitForm").w-100 Login-->
</template>

<script>
import setBodyClassMb0 from '@/mixins';

export default {
  name: 'AuthView',
  mixins: [setBodyClassMb0],
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      this.$router.push('/');
      // console.log('Form Submitted')
    },
  },
};
</script>
