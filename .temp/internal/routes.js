/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\PanCong\\Desktop\\博客\\blog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-f578ac54",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f578ac54").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-7495e4dc",
    path: "/html/a_tag_jump.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7495e4dc").then(next)
    },
  },
  {
    name: "v-1656ff1c",
    path: "/html/html_semantization.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1656ff1c").then(next)
    },
  },
  {
    name: "v-44de2e10",
    path: "/handwritejs/ajax.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-44de2e10").then(next)
    },
  },
  {
    name: "v-6ee18b24",
    path: "/handwritejs/deep_clone.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6ee18b24").then(next)
    },
  },
  {
    name: "v-0f087a5c",
    path: "/html/meta.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-0f087a5c").then(next)
    },
  },
  {
    name: "v-6dc8baa8",
    path: "/html/seo.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6dc8baa8").then(next)
    },
  },
  {
    name: "v-d9d69150",
    path: "/html/async_and_defer.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-d9d69150").then(next)
    },
  },
  {
    name: "v-d40477b8",
    path: "/vue/vue_understand.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-d40477b8").then(next)
    },
  },
  {
    name: "v-16d4f072",
    path: "/javaScript/ajax.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-16d4f072").then(next)
    },
  },
  {
    name: "v-32df3582",
    path: "/javaScript/equal_and_congruent.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-32df3582").then(next)
    },
  },
  {
    name: "v-79d7e0fa",
    path: "/javaScript/array_cof.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-79d7e0fa").then(next)
    },
  },
  {
    name: "v-b1564aac",
    path: "/tag/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-b1564aac").then(next)
    },
    meta: {"pid":"tags","id":"tags"}
  },
  {
    path: "/tag/index.html",
    redirect: "/tag/"
  },
  {
    name: "v-ef9325c4",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("FrontmatterKey", "v-ef9325c4").then(next)
    },
    meta: {"pid":"categories","id":"categories"}
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    name: "v-6319eb4e",
    path: "/timeline/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("TimeLines", "v-6319eb4e").then(next)
    },
    meta: {"pid":"timeline","id":"timeline"}
  },
  {
    path: "/timeline/index.html",
    redirect: "/timeline/"
  },
  {
    name: "v-e8d86dc8",
    path: "/tag/js/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-e8d86dc8").then(next)
    },
    meta: {"pid":"tags","id":"js"}
  },
  {
    path: "/tag/js/index.html",
    redirect: "/tag/js/"
  },
  {
    name: "v-322a45da",
    path: "/tag/vue/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tag", "v-322a45da").then(next)
    },
    meta: {"pid":"tags","id":"vue"}
  },
  {
    path: "/tag/vue/index.html",
    redirect: "/tag/vue/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]