<template>
    <div class="container">
      <el-menu mode="vertical" class="el-menu-vertical-demo aside-menu" @select="handleSelect">
        <el-submenu v-for="item in charMenus" :key="item.name" :index="item.name">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="child in item.children" :key="child.name" :index="child.name">{{child.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "echarts",
        data () {
          return {
            charMenus: [
              {
                name: 'bar',
                children: [
                  {name: 'bar1'},
                  {name: 'bar2'},
                  {name: 'bar3'}
                ]
              },
              {
                name: 'pie',
                children: [
                  {name: 'pie1'},
                  {name: 'pie2'},
                  {name: 'pie3'}
                ]
              }
            ]
          };
        },
        methods: {
          handleSelect (key, keyPath) {
            console.log(key);
            this.$router.push({name: key});
          }
        }
    }
</script>

<style scoped lang=stylus>
  .container .aside-menu {
    width 20%;
    float left;
  }

</style>
