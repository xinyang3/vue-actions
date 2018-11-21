<template>
    <div>redis client test</div>
</template>
<script>
export default {
  name: 'redisClient',
  data () {
    return {}
  },
  methods: {
    getRedis () {
      console.log(this.$redisClient)
    }
  },
  created () {
    this.getRedis()
  }
}
</script>
