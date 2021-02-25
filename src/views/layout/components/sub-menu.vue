<template>
  <div>
    <template v-for="(sub,index) in subMenu">
      <template v-if="sub.top">
        <el-menu-item :key="sub.index" v-bind="sub">
          <i v-if="sub.icon" :key="index" :class="sub.icon"></i>
          <span slot="title">{{sub.title}}</span>
        </el-menu-item>
      </template>
      <el-submenu v-else v-bind="sub" :key="sub.index">
        <template #title><i v-if="sub.icon" :class="sub.icon"></i>{{sub.title}}</template>
        <sub-menu v-if="sub.subMenu&&sub.subMenu.length" :subMenu="sub.subMenu"></sub-menu>
        <el-menu-item v-for="item in sub.menuItem" :key="item.index" v-bind="item">{{item.title}}</el-menu-item>
      </el-submenu>
    </template>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'sub-menu',
  props: {
    subMenu: {
      required: true,
      type: Array,
    },
  },
})
</script>