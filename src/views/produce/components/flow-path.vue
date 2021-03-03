<template>
  <div class="flow-canvas">
    <svg :width="canvasWidth" height="280" onselectstart="return false;">
      <defs>
        <marker id="sop-arrow-start" refX="1" refY="5" markerUnits="userSpaceOnUse" markerWidth="17" markerHeight="11" orient="auto">
          <path id="sop-arrow-default" d="M 5 0 L 11 10" fill="white" stroke="#585858" stroke-width="1" display="none"></path>
        </marker>
        <marker id="sop-arrow-end" refX="15" refY="6" markerUnits="userSpaceOnUse" markerWidth="15" markerHeight="12" orient="auto">
          <path id="sop-arrow-arrowhead" d="M 0 1 L 15 6 L 0 11z" fill="#585858" stroke="#585858" stroke-linejoin="round" stroke-width="2"></path>
        </marker>
      </defs>
      <g 
        stroke="none" 
        font-family="Verdana, sans-serif" 
        font-size-adjust="none" 
        font-style="normal" 
        font-variant="normal" 
        font-weight="normal" 
        line-heigth="normal" 
        font-size="12">
          <g
            v-for="(item,index) of flowData" 
            :id="'sop-'+uuid.v4()"
            :key="index" 
            :title="item.businessFlowNodeName||''"
            @click="selectPath(item, index)">
              <template v-if="item.businessFlowNodeType == 4">
                <g pointer-events="fill" :transform="`translate(${start.w*2 + flow.w*(index-1) + flow.stroke + end.stroke + baseArrow*index + baseX}, ${baseY-end.w})`">
                  <circle :cx="end.w" :cy="end.w" :r="end.w" stroke="#585858" fill="#ffffff" :stroke-width="end.stroke"></circle>
                </g>
              </template>
              <template v-else>
                <g v-if="item.businessFlowNodeType == 1" pointer-events="fill" :transform="`translate(${baseX}, ${baseY-start.w})`">
                  <circle :cx="start.w" :cy="start.w" :r="start.w" stroke="#585858" fill="#ffffff" :stroke-width="start.stroke"></circle>
                </g>
                <g 
                  v-else 
                  pointer-events="fill" 
                  :transform="`translate(${start.w*2 + flow.w*(index-1) + flow.stroke + baseArrow*index + start.stroke + baseX}, ${baseY-flow.h/2})`">
                    <rect x="0" y="0" :width="flow.w" :height="flow.h" rx="10" ry="10" stroke="#bbbbbb" :stroke-width="flow.stroke" fill="#f9f9f9"></rect>
                    <text x="10" y="20">
                      <tspan x="25" y="45">{{ item.businessFlowNodeName || '' }}</tspan>
                    </text>
                </g>
                <g>
                  <path
                    :d="`M${baseX + start.w*2 + baseArrow*index + (index?flow.stroke*2:flow.stroke) + flow.w*index} ${baseY}L${ baseX + start.w*2 + baseArrow*index + flow.w*index + baseArrow} ${baseY}`" 
                    stroke="#585858" 
                    fill="none" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    marker-start="url(#sop-arrow-start)" 
                    marker-end="url(#sop-arrow-end)">
                  </path>
                </g>
              </template>
          </g>
      </g>
      <g class="svgcontainer">
        <g :display="`${position.businessFlowNodeType?'':'none'}`">
          <rect 
            :x="position.x" 
            :y="position.y" 
            stroke-width="2" 
            stroke="#18B398" 
            fill="none" 
            stroke-dasharray="2,2" 
            pointer-events="none" 
            :width="position.w" 
            :height="position.h">
          </rect>
        </g>
      </g>
    </svg>
    <div :style="{display: position.businessFlowNodeType?'':'none' }">
      <div class="flow-handle" :style="{left: position.x+'px', top: position.y+position.h+5+'px' }">
        <svg 
          v-if="position.businessFlowNodeType == 2" 
          viewBox="0 0 1024 1024" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          x="0" 
          y="5"
          @click="delFlow">
            <path d="M517.59 21.609c-100.299 0-181.703 79.514-185.167 179.34H98.603c-25.979 0-47.235 21.099-47.235 47.236 0 25.98 21.099 47.237 47.236 47.237h52.117v528.416c0 99.196 67.233 180.285 150.37 180.285h423.55c82.98 0 150.37-80.616 150.37-180.285V295.737h47.236c25.98 0 47.236-21.1 47.236-47.237 0-25.98-21.099-47.236-47.236-47.236H702.441C699.449 101.124 617.888 21.61 517.59 21.61z m-96.677 179.34c3.464-51.172 45.19-90.85 96.834-90.85s93.37 39.835 96.362 90.85H420.913z m-119.98 714.842c-29.444 0-61.88-37.789-61.88-91.953V295.737h547.311V824.31c0 54.007-32.436 91.954-61.88 91.954H300.933v-0.473z m0 0"></path>
            <path d="M364.387 802.267c21.57 0 39.363-21.571 39.363-48.653V476.022c0-27.082-17.635-48.654-39.363-48.654-21.572 0-39.364 21.572-39.364 48.654v277.592c0 26.924 17.32 48.653 39.364 48.653z m142.496 0c21.571 0 39.363-21.571 39.363-48.653V476.022c0-27.082-17.635-48.654-39.363-48.654-21.571 0-39.364 21.572-39.364 48.654v277.592c0 26.924 17.793 48.653 39.364 48.653z m149.896 0c21.571 0 39.364-21.571 39.364-48.653V476.022c0-27.082-17.635-48.654-39.364-48.654-21.571 0-39.363 21.572-39.363 48.654v277.592c0 26.924 17.162 48.653 39.363 48.653z m0 0" p-id="1981"></path>
        </svg>
        <svg 
          viewBox="0 0 1024 1024" 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          v-if="position.businessFlowNodeType != 4"
          :x="`${position.businessFlowNodeType == 2?20:0}`" 
          y="5"
          @click="addFlow">
            <path d="M896 448H576V128c0-35.2-28.8-64-64-64s-64 28.8-64 64v320H128c-35.2 0-64 28.8-64 64s28.8 64 64 64h320v320c0 35.2 28.8 64 64 64s64-28.8 64-64V576h320c35.2 0 64-28.8 64-64s-28.8-64-64-64z" fill=""></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import uuid from 'uuid';
import { defineComponent, reactive, toRefs, computed } from '@vue/composition-api'
export default defineComponent({
  props: {
    id: {
      type: Number,
      default: 0
    },

    /**
     * data 数据
     * name 环节名称
     * type 状态
     * produceCycle 生产周期（天）
     * earlyCycle 预警周期（天）
     * relation 关联工作流节点 (多选)
     */
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  setup(props, context) {
    const flowPath = reactive({
      uuid,
      baseX: 40,
      baseY: 150,
      baseArrow: 70,
      position: { x: 0, y: 0, w: 0, h: 0 },
      flowData: props.data
    })

    const start = {
      w: 15,
      stroke: 1
    }
    const flow = {
      w: 100,
      h: 80,
      stroke: 1
    }
    const end = {
      w: 14,
      stroke: 3
    }

    selectPath(flowPath.flowData[1], 1);
    let canvasWidth = computed(() => {
      let len = flowPath.flowData.length;
      return len * flow.w + len * flow.stroke + (len-1) * flowPath.baseArrow
    })
    
    function selectPath(item, index) {
      switch(item.businessFlowNodeType) {
        case 1:
          flowPath.position = {
            index,
            businessFlowNodeType: item.businessFlowNodeType,
            x: flowPath.baseX,
            y: flowPath.baseY - start.w,
            w: start.w*2,
            h: start.w*2
          }
        break;
        case 4:
          flowPath.position = {
            index,
            businessFlowNodeType: item.businessFlowNodeType,
            x: flowPath.baseX + start.w*2 + flowPath.baseArrow*(flowPath.flowData.length-1) + ((flowPath.flowData.length-2)?flow.stroke*2:flow.stroke) + flow.w*(flowPath.flowData.length-2),
            y: flowPath.baseY - end.w - end.stroke/2,
            w: end.w*2 + end.stroke,
            h: end.w*2 + end.stroke
          }
        break;
        default:
          flowPath.position = {
            index,
            businessFlowNodeType: item.businessFlowNodeType,
            x: flowPath.baseX + start.w*2 + flowPath.baseArrow*index + flow.stroke*2 + flow.w*(index-1),
            y: flowPath.baseY - flow.h/2,
            w: flow.w + flow.stroke,
            h: flow.h + flow.stroke
          }
          // console.log("选中节点=", item)
        break;
      }
      context.emit('selectFlow', index)
    }

    function addFlow() {
      let currIndex = (flowPath.position.index || 0 ) + 1;
      let addItem = {
        name: '用户任务' + currIndex,
        businessFlowNodeType: 2,
        relation: '',
        produceCycle: 2,
        earlyCycle: 4
      };
      flowPath.flowData.splice(currIndex, 0, addItem)
      selectPath(addItem, currIndex);
    }

    function delFlow() {
      if (flowPath.position.index && flowPath.flowData.length > 3 ) {
        flowPath.flowData.splice(flowPath.position.index, 1);
        selectPath(flowPath.flowData[flowPath.position.index-1], flowPath.position.index-1);
      }
      console.log("flowPath.position.index",flowPath.position.index)
    }

    return {
      start,
      flow,
      end,
      selectPath,
      delFlow,
      addFlow,
      canvasWidth,
      ...toRefs(flowPath)
    }
  }
})
</script>
<style lang="scss" scoped>
  .flow-canvas {
    position: relative;
    .flow-handle {
      position: absolute;
    }
  }
</style>