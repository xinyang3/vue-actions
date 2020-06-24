<template>
    <div>
      hello<br/>
      {{name | filterA}}

      <p v-if="show">this is  a text </p>
      <div @click="show = !show">show</div>
      <input v-model="text" width="120px">
      <div>{{reserveText}}</div>
    </div>
</template>

<script>
    export default {
      name: "test1",
      /*data(){
        return {
          a: 123
        }
      },
      created: function () {
        console . log (this. a);
      },
      mounted: function () {
        console.log(this.$el);
      }*/

      data() {
        return{
          date: new Date(),
          name: 'abcdef',
          show: false,
          text: ''
        }
      },
      mounted: function () {
        var _this = this;
        // this.timer = setInterval(function () {
        //   _this.date = new Date();
        //   console.log(_this.date);
        // }, 1000);
      },
      beforeDestroy: function () {
        if (this.timer) {
          // console.log(this.timer);
          clearInterval(this.timer);
        }
      },
      filters: {
        filterA: function (value) {
          return value.toUpperCase();
        }
      },
      computed: {
        reserveText: function () {
          return  this.text.split('').reverse().join (',');
        }
      }
    }
</script>

<style scoped>

</style>
