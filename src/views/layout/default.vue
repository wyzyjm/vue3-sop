<template>
  <el-container type :style="{height:`${layout.container.height}px`}">
    <!-- 左侧菜单 -->
    <el-aside :width="`${layout.aside.width}px`" class="sop-sider">
      <a class="logo">
        <img src="@/assets/logo.png" class=".mr-11 .w-100" />
      </a>
      <el-menu 
        class="menu" 
        v-bind="menu" 
        text-color="#fff"
        background-color="#2F2F2F">
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
        <breadcrumb class="mb15" />
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
        background: '#2F2F2F',
      },
      aside: {
        width: 240,
        color: '#fff',
        background: '#2F2F2F',
      },
    })

    const route = root.$route

    // 菜单配置
    const menu = reactive({
      'default-active': computed(() => {
        const { matched } = route
        return matched[matched.length - 1].path
      }),
      'background-color': '#363636',
      'text-color': '#fff',
      router: true,
      subMenu: [
        {
          icon: 'el-icon-message',
          index: '1',
          title: '系统设置',
          menuItem: [
            {
              index: '/system-setting/role/list',
              title: '角色管理',
            },
            {
              index: '/system-setting/provider/list',
              title: '服务商管理',
            },
            {
              index: '/system-setting/staff/list',
              title: '员工管理',
            },
            {
              index: '/system-setting/document/list',
              title: '文档管理',
            },
            {
              index: '/system-setting/resource/list',
              title: '资源管理',
            },
          ],
        },
        {
          icon: 'el-icon-s-help',
          index: '2',
          title: '生产设置',
          menuItem: [
            {
              index: '/produce/service-flow',
              title: '服务流程设置',
            },
            {
              index: '/produce/business-type/list',
              title: '业务管理',
            },
            {
              index: '/produce/service-type/list',
              title: '服务单状态管理',
            },
            {
              index: '/produce/service-one-phase-information/list',
              title: '客户呈现信息配置',
            },
            {
              index: '/produce/sales-channels/list',
              title: '售卖渠道管理',
            },
            {
              index: '/produce/product-line/list',
              title: '产品线管理',
            },
            {
              index: '/produce/service-product/list',
              title: '服务产品管理',
            },
          ]
        },
        {
          icon: 'el-icon-s-tools',
          index: '3',
          title: '我的工具',
          menuItem: [
            {
              index: '/tool/log',
              title: '操作日志',
            },
            {
              index: '/tool/evaluate',
              title: '复评',
            },
          ]
        }        
      ],
    })

    return {
      menu,
      layout,
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
  background: #fbfbfb;
  padding: 40px;
}
.sop-sider {
  width: $sop-sider-width;
  background: $sop-sider-bg;
  height: 100%;
}
.sop-herder {
  background: $sop-header-bg;
  color: $sop-color-white;
  height: $sop-header-height;
  line-height: $sop-header-height;
}
</style>
