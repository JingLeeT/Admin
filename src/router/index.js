import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {title: '首页'},
    redirect: '/system/user',
    component: Home,
    children: [
      {
        path: '/system',
        name: 'System',
        redirect: '/system/user',
        component: () => import('@/views'),
        meta: {
          title: '系统管理',
          icon: 'el-icon-user-solid'
        },
        children: [
          {
            path: '/system/user',
            name: 'User',
            component: () => import('@/views/System/User'),
            meta: {title: '用户管理'}
          }, {
            path: '/system/role',
            name: 'Role',
            component: () => import('@/views/System/Role'),
            meta: {title: '角色管理'}
          }, {
            path: '/system/jurisdiction',
            name: 'Jurisdiction',
            component: () => import('@/views/System/Jurisdiction'),
            meta: {title: '权限管理'}
          }]
      }, {
        path: '/article',
        name: 'Article',
        redirect: '/article/issue',
        component: () => import('@/views'),
        meta: {
          title: '文章管理',
          icon: 'el-icon-s-order'
        },
        children: [
          {
            path: '/article/issue',
            name: 'Issue',
            component: () => import('@/views/Article/Issue'),
            meta: {title: '发布文章'}
          }, {
            path: '/article/articleList',
            name: 'ArticleList',
            component: () => import('@/views/Article/ArticleList'),
            meta: {title: '文章列表'}
          }]
      }, {
        path: '/vip',
        name: 'Vip',
        redirect: '/vip/vipList',
        component: () => import('@/views'),
        meta: {
          title: '会员管理',
          icon: 'el-icon-s-custom'
        },
        children: [
          {
            path: '/vip/vipList',
            name: 'VipList',
            component: () => import('@/views/Vip/VIPList'),
            meta: {title: '会员列表'}
          }, {
            path: '/vip/vipCategory',
            name: 'VipCategory',
            component: () => import('@/views/Vip/VipCategory'),
            meta: {title: '会员类型'}
          }]
      }, {
        path: '/template',
        name: 'Template',
        redirect: '/template/templateList',
        component: () => import('@/views'),
        meta: {
          title: '模板管理',
          icon: 'el-icon-menu'
        },
        children: [
          {
            path: '/template/templateList',
            name: 'TemplateList',
            component: () => import('@/views/Template/TemplateList'),
            meta: {title: '模板列表'}
          }, {
            path: '/template/material',
            name: 'Material',
            component: () => import('@/views/Template/Material'),
            meta: {title: '素材列表'}
          }]
      }, {
        path: '/video',
        name: 'Video',
        redirect: '/video/videoList',
        component: () => import('@/views'),
        meta: {
          title: '视频管理',
          icon: 'el-icon-video-camera-solid'
        },
        children: [
          {
            path: '/video/videoList',
            name: 'VideoList',
            component: () => import('@/views/Video/VideoList'),
            meta: {title: '视屏列表'}
          }]
      }, {
        path: '/indent',
        name: 'Indent',
        redirect: '/indent/payHistory',
        component: () => import('@/views'),
        meta: {
          title: '订单管理',
          icon: 'el-icon-s-claim'
        },
        children: [
          {
            path: '/indent/payHistory',
            name: 'PayHistory',
            component: () => import('@/views/Indent/PayHistory'),
            meta: {title: '支付记录'}
          }, {
            path: '/indent/indentList',
            name: 'IndentList',
            component: () => import('@/views/Indent/IndentList'),
            meta: {title: '订单列表'}
          }]
      },]
  }, {
    path: '/error',
    name: 'Error',
    component: () => import('@/views/error')
  }, {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
