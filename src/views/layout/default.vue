<template>
  <el-container type :style="{height:`${layout.container.height}px`}">
    <!-- 左侧菜单 -->
    <el-aside :width="`${layout.aside.width}px`" class="sop-sider">
      <a class="logo">
        <img src="@/assets/logo.png" class=".mr-11 .w-100" />
      </a>
      <el-menu class="menu" v-bind="menu">
        <sub-menu :subMenu="menu.subMenu"></sub-menu>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 导航 -->
      <el-header class="sop-herder">
        <div class="r">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>王小虎</span>
          <span>{{menu['default-openeds']}}</span>
        </div>
      </el-header>

      <!-- 主体内容 -->
      <el-main class="main">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in route.matched" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
import { useWindowSize } from '@vueuse/core'
import { defineComponent, reactive, computed } from '@vue/composition-api'
import SubMenu from './components/sub-menu'

export default defineComponent({
  components: { SubMenu },
  setup(props, { root }) {
    // 布局配置
    const layout = reactive({
      container: {
        height: useWindowSize().height,
      },
      header: {
        height: 60,
        color: '#fff',
        background: '#343434',
      },
      aside: {
        width: 260,
        color: '#fff',
        background: '#4d4d4d',
      },
    })

    const route = root.$route

    // 菜单配置
    const menu = reactive({
      'default-active': computed(() => {
        const { matched } = route
        return matched[matched.length - 1].path
      }),
      'background-color': '#4d4d4d',
      'text-color': '#fff',
      router: true,
      subMenu: [
        {
          icon: 'el-icon-message',
          index: '1',
          title: '导航1',
          menuItem: [
            {
              index: '/test',
              title: '标题1',
            },
          ],
        },
      ],
    })

    return {
      menu,
      layout,
      route,
    }
  },
})
</script>

<style lang="scss" scoped>
.logo {
  display: block;
  img {
    vertical-align: middle;
  }
}
.menu {
  border-right: none;
}
.main {
  border: 10px solid #e8ecef;
}
.sop-sider {
  width: $sop-sider-width;
  background: $sop-sider-bg;
  height: 100%;
  text-align: center;
}
.sop-herder {
  background: $sop-header-bg;
  color: $sop-color-white;
  height: $sop-header-height;
  line-height: $sop-header-height;
}
</style>
