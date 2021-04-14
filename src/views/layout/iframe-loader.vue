<template>
    <div class="iframe-content">
        <span v-if="status!=='success'" class="status">{{status}}</span>
        <iframe class="p10" :src="url" name="iframe" frameborder="0"></iframe>
    </div>
</template>
<style scoped>
.iframe-content {
    overflow: hidden;
}

.iframe-content,
.iframe-content iframe {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
</style>
<script>
export default {
  data () {
    return {
      status: 'loading...'
    }
  },
  computed: {
    url () {
      return this.$route.query.url
    }
  },
  updated () {
    this.status = 'success'
  },
  mounted () {
    if (!this.url) {
      this.status = 'error'
      return
    }

    this.$el.querySelector('iframe').onload = () => {
      this.status = 'success'
    }
  }
}
</script>
