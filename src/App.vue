<template>
  <div>
    <h1>Hello App!</h1>
    <div class="aside-area">
      <p>
        <router-link to="/foo">Go to Foo</router-link>
      </p>
      <p>
        <router-link to="/bar">Go to Bar</router-link>
      </p>
      <!-- <p>
        <router-link v-bind:to="{name: 'user'}">Go to User</router-link>
      </p> -->
      <p>
        <router-link to="/animateTest">go to animateTest</router-link>
      </p>
       <p>
        <router-link to="/transitionTest2">go to animateTest2</router-link>
      </p>
       <p>
        <router-link to="/customerDirective">go to customer-directive</router-link>
      </p>
      <p>
        <router-link to="/diagram">go to diagram</router-link>
      </p>
       <p>
        <router-link to="/redisClient">go to diagram</router-link>
      </p>
      <p>
        <router-link to="/elementHead">go to elementHead</router-link>
      </p>
      <p>
        <router-link to="/fullpage-navigation">go to fullpage-navigation</router-link>
      </p>
      <p>
        <router-link to="/messageBoxCustomer">messageBoxCustomer</router-link>
      </p>
      <p>
        <router-link to="/echarts">echarts-demos</router-link>
      </p>
      <p>
        <a @click="goPage">to dynamic router-view</a>
      </p>
    </div>
    <div class="main-area">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {
    goPage () {
      this.$router.push({name: 'shop'})
    }
  }
}
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .aside-area {
        width: 25%;
        height: auto;
        float: left;
    }

    .main-area {
        width: 70%;
        float: left;
    }
</style>
