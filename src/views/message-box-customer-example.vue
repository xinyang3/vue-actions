<template>
    <div>
      <el-button class="el-button"  @click="click">click</el-button>
      <message-box-customer></message-box-customer>
    </div>
</template>
<script>
import messageBoxCustomer from './message-box-customer/src/main.vue'
export default {
  name: 'cusMsgBoxSample',
  components: {messageBoxCustomer},
  data () {

  },
  mounted () {
    this.$messageBoxCustomer({
      title: 'title',
      content: 'content'
    })
  }
}
</script>
