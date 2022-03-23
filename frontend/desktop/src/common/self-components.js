/**
 * @file 自定义组件
 * @author couriour c
 */

import Vue from 'vue'

Vue.component('top-back', () => import('@/components/top-back'))
Vue.component('tabs', () => import('@/components/Tabs'))
Vue.component('self-table', () => import('@/components/self-table'))
Vue.component('select-search', () => import('@/components/select-search'))
Vue.component('empty', () => import('@/components/empty'))
Vue.component('app-exception', () => import('@/components/exception'))
