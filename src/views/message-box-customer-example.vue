<template>
    <div>
      <el-button class="el-button"  @click="click">click</el-button>
    </div>
</template>
<script>
import messageBoxCustomer from './message-box-customer/src/main.vue'
export default {
  name: 'cusMsgBoxSample',
  data () {

  },
  methods: {
    click () {
      this.$messageBoxCustomer({
        title: 'title',
        message: 'message',
        confirmText: '确定',
        onClose: function () {
          console.log('component closed');
        },
        confirm: function () {
          console.log('confirm text');
        }
      })
    }
  },
  mounted () {
  }
}
</script>
