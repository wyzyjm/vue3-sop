<template>
  <div class="exception">
    <div class="imgBlock">
      <div class="imgEle" style="background-image: url(&quot;/static/403.png&quot;);"></div>
    </div>
    <div class="content">
      <h1>403</h1>
      <div class="desc">抱歉，你无权访问该页面</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.exception {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 80%;
  min-height: 500px;
  .imgBlock {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    width: 50%;
    padding-right: 152px;
    zoom: 1;
  }
  .imgEle {
    float: right;
    width: 100%;
    max-width: 430px;
    height: 360px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: contain;
  }
  .content {
    -webkit-box-flex: 1;
    -ms-flex: auto;
    flex: auto;
    h1 {
      margin-bottom: 24px;
      color: #434e59;
      font-weight: 600;
      font-size: 72px;
      line-height: 72px;
    }
    .desc {
      margin-bottom: 16px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 20px;
      line-height: 28px;
    }
  }
}
</style>
