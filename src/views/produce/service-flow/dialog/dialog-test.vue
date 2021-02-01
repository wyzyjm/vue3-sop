<template>
  <div>
    复制--{{propsTest}}--成功
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    propsTest: {
      default: 'test',
    },
  },
  created() {},
}
</script>