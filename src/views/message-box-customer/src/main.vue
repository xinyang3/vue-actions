<template>
    <transition>
        <div class="message-box-customer">
          <div :class=['msg-box-header',iconHead]>

          </div>
        </div>
    </transition>
</template>
<script>
export default {
  name: 'MessageBoxCustomer',
  props: {
    iconHead: {
      required: false,
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods: {
    click () {

    }
  }
}
</script>
<style scope lang="stylus">
    .message-box {
        border: normal grey 1px;
        width: 200px;
        height: 100px;
        position: fixed;
        bottom: 0;
        right: 0;
    }
</style>
