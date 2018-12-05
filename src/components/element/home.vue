<template>
    <div class="head-content">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="blue" text-color="red">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
        <img src="../../../static/agirl2.jpg" class="img">
        <img src="../../../static/home-word.png" class="img">
        <div class="bg">bg</div>
        <child-one></child-one>
    </div>
</template>
<script>
    import childOne from './children/child-one.vue';
    
export default {
  name: 'elementHead',
  created () {
    // var fs = require('fs');
    // var result = fs.readFileSync('../../../static/agirl2.jpg', (error, data) => {
    //     console.log(data)
    // });
  
    var a = require('../../../static/agir' + '1.jpg');
    console.log(a);

  },
  data () {
    return {
      activeIndex: '2-2'
    }
  },
  methods: {
    handleSelect () {
      console.log(arguments)
    }
  },
  components: {
    childOne: childOne
  }
}
</script>
<style>
    .head-content {
        width: 100%;
    }
    .img {
        width: 200px;
        height: 200px;
    }
    .bg {
        width: 200px;
        height: 200px;
        background: url('../../../static/caihong.jpg')
    }
</style>
