<template>
  <div>
    <el-submenu v-for="sub in subMenu" v-bind="sub" :key="sub.index">
      <template #title><i v-if="sub.icon" :class="sub.icon"></i>{{sub.title}}</template>
      <sub-menu v-if="sub.subMenu&&sub.subMenu.length" :subMenu="sub.subMenu"></sub-menu>
      <el-menu-item v-for="item in sub.menuItem" :key="item.index" v-bind="item">{{item.title}}</el-menu-item>
    </el-submenu>
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