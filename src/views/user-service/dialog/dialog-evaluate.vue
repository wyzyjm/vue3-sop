<template>
  <div>
    <div class="eval-container">
      <p>感谢您对我们服务的支持和认可，请您对本次服务进行评价!</p>
      <div class="eval-star">
        <div class="star-item">
          交付质量
          <span 
            :class="{
              'star-not': true,
              'star-active': index < form.a
            }"
            @click="starA(index)"
            v-for="(item, index) of starList"
            :key="index">
              <i class="iconfont">&#xe602;</i>
            </span>
        </div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 4}"
          placeholder="欢迎您留下宝贵的意见，200字以内。"
          v-model="form.d">
        </el-input>
      </div>
      <s-button type="primary" @click="save">评价</s-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
export default defineComponent({
  setup() {
    let data = reactive({
      starList: [true, true, true, true, true]
    })

    let form = reactive({
      a: 2,
      b: 2,
      c: 3,
      d: 'desc'
    })

    const starA = (index) => {
      form.a = index+1;
    }

    const save = () => {
      console.log('form', form)
    }

    return {
      save,
      form,
      starA,
      ...toRefs(data)
    }
  },
})
</script>
<style lang="scss" scoped>
  .eval-container {
    display: flex;
    padding: 0 60px;
    flex-direction: column;
    justify-content: center;
    .eval-star {
      padding: 20px 0;
      .star-item {
        margin-bottom: 20px;
        .star-not {
          color: $sop-color-9;
          margin-left: 8px;
          cursor: pointer;
          &.star-active {
            color: #F5A623;
          }
        }
      }
    }
  }
</style>