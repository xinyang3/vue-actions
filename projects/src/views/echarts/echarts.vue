<template>
    <div class="container">
      <el-menu :default-active="'demoOne'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="demoOne">demo-one</el-menu-item>
        <el-menu-item index="demoTwo">demo-one</el-menu-item>
        <el-menu-item index="3">demo-one</el-menu-item>
        <el-menu-item index="4">demo-one</el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "echarts",
        data () {
          return {};
        },
        methods: {
          handleSelect (key, keyPath) {
            this.$router.push({name: key});
          }
        }
    }
</script>

<style scoped>

</style>
