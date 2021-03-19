<template>
  <div>
    <template v-for="(sub) in subMenu">
      <el-submenu v-if="sub.children&&sub.children.length" :key="sub.resourceCode" :index="sub.resourceCode">
        <template #title><i v-if="sub.resourceIcon" :class="sub.resourceIcon"></i>{{sub.resourceName}}</template>
        <sub-menu v-if="sub.children&&sub.children.length" :subMenu="sub.children"></sub-menu>
      </el-submenu>
      <el-menu-item v-else :key="sub.resourceCode" :index="sub.resourceUrl">
        <template #title><i v-if="sub.resourceIcon" :class="sub.resourceIcon"></i>{{sub.resourceName}}</template>
      </el-menu-item>
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