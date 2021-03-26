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
              'star-active': index < form.serviceScore
            }"
            @click="starA(index)"
            v-for="(item, index) of starList"
            :key="index">
              <i class="iconfont">&#xe602;</i>
            </span>
        </div>
        <div class="star-item">
          服务态度
          <span 
            :class="{
              'star-not': true,
              'star-active': index < form.designScore
            }"
            @click="starB(index)"
            v-for="(item, index) of starList"
            :key="index">
              <i class="iconfont">&#xe602;</i>
            </span>
        </div>
        <div class="star-item">
          服务周期
          <span 
            :class="{
              'star-not': true,
              'star-active': index < form.makeScore
            }"
            @click="starC(index)"
            v-for="(item, index) of starList"
            :key="index">
              <i class="iconfont">&#xe602;</i>
            </span>
        </div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 4, maxRows: 4}"
          :maxlength="200"
          :disabled="!isEdit"
          placeholder="欢迎您留下宝贵的意见，200字以内。"
          v-model="form.evaluateContent">
        </el-input>
      </div>
      <s-button type="primary" @click="save" v-if="isEdit">评价</s-button>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import { Message } from 'element-ui'
import setScore from '@/api/2387-post-service-order-interface-api-customer_score'
import getScore from '@/api/2393-get-service-order-interface-api-get_customer_score'
export default defineComponent({
  props: {
    orderCode: {
      type: String,
      required: ''
    },
    isEdit: {
      type: Boolean,
      required: false
    }
  },
  setup({ orderCode, isEdit }, { emit }) {
    let data = reactive({
      starList: [true, true, true, true, true]
    })

    let form = reactive({
      orderCode,
      serviceScore: 1,
      designScore: 1,
      makeScore: 1,
      evaluateContent: ''
    })

    if (!isEdit) {
      getScore({orderCode})
      .then(({ data }) => {
        form.serviceScore = data.serviceScore;
        form.designScore = data.designScore;
        form.makeScore = data.makeScore;
        form.evaluateContent = data.evaluateContent;
      })
    }

    const starA = (index) => {
      isEdit && (form.serviceScore = index+1);
    }

    const starB = (index) => {
      isEdit && (form.designScore = index+1);
    }

    const starC = (index) => {
      isEdit && (form.makeScore = index+1);
    }

    const save = () => {
      setScore(form).then(({ data }) => {
        emit('close')
        emit('update');
        Message({
          type: 'success',
          message: '评价成功！',
        })
      })
    }

    return {
      save,
      form,
      starA,
      starB,
      starC,
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