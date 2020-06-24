<template>
  <div>User {{ $route.params.id }}
    <router-link to="/foo">go to profile</router-link>
    <router-link to="/user/posts">go to posts</router-link>
    <!--<router-view></router-view>-->
    <hello-world></hello-world>
  </div>
</template>

<script>
    import HelloWorld from "../HelloWorld";
    export default {
      data () {
        return {}
      },
      components: {
        helloWorld : HelloWorld
      }
    }
</script>

<style scoped>

</style>
