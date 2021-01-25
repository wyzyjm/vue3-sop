<template>
  <el-container :style="{height:`${layout.container.height}px`}">
    <el-header :height="`${layout.header.height}px`" :style="{
      background:layout.header.background,
      color:layout.header.color,
      lineHeight:layout.header.height+'px'
      }">
      <a class="logo">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAAAUCAYAAAHtgH8XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGjGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDgtMjhUMTA6MDc6NDErMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDgtMjhUMTA6MDc6NDErMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA4LTI4VDEwOjA3OjQxKzA4OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZjZTNiNGZkLWVkNDgtNDNkYi1iMDJlLTNjNDMxYzI5M2Y5NSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjk3ZTlmMjU2LWQ1YmQtM2Q0NS04NjEzLTBhMWM5MDQ0ODY0OSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjhiNWI1YmYyLTU2ODAtNGYwMS05ODc4LWZlYWQxODQ2OWQ1YiIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGI1YjViZjItNTY4MC00ZjAxLTk4NzgtZmVhZDE4NDY5ZDViIiBzdEV2dDp3aGVuPSIyMDE4LTA4LTI4VDEwOjA3OjQxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZmNlM2I0ZmQtZWQ0OC00M2RiLWIwMmUtM2M0MzFjMjkzZjk1IiBzdEV2dDp3aGVuPSIyMDE4LTA4LTI4VDEwOjA3OjQxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+eG1wLmRpZDpDQTJEN0RBQkU1MjgxMUU3OUI1RUU1OUNFNDNDNENBRTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkHv48cAAAgSSURBVGiB7ZpLiKRXFcd/V1tifCA1PkLQoFYHY3BAsZr4Wiik2qVkUwPiRhCqNwo+wBoQFSGa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" alt="">
      </a>
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

    <el-container :style="{height:`${layout.container.height-layout.header.height}px`}">
      <el-aside :width="`${layout.aside.width}px`" :style="{background:layout.aside.background}">
        <el-menu class="menu" v-bind="menu">
          <sub-menu :subMenu="menu.subMenu"></sub-menu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in route.matched" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-container class="mt20">
          <router-view />
        </el-container>
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
        width: 220,
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
  float: left;
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
</style>
