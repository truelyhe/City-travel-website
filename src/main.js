// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

// import signin from './components/admin/signin.vue'
// import header from './base/header.vue'
// import sidebar from './base/sidebar.vue'
// import footer from './base/footer.vue'
// import article from './components/article.vue'
// import about from './components/about.vue'
// import articleDetail from './components/articleDetail.vue'
// import articleList from './components/admin/articleList.vue'
// import articleEdit from './components/admin/articleEdit.vue'
// import cityNews from './components/admin/cityNews.vue'
// import noticeManage from './components/admin/noticeManage.vue'
import ElementUI from 'element-ui'

// Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

// const router = new VueRouter({
//   routes: [
//     {path: '/', components: {default: article, header: header, footer: footer}},
//     {path: '/article', components: {default: article, header: header, footer: footer}},
//     {path: '/about', components: {default: about, header: header, footer: footer}},
//     {path: '/articleDetail/:id', components: {default: articleDetail, header: header, footer: footer}},
//     {path: '/admin/articleList', components: {default: articleList, sidebar: sidebar}},
//     {path: '/admin/articleEdit', component: articleEdit},
//     {path: '/admin/articleEdit/:id', component: articleEdit},
//     {path: '/admin/cityNews', components: {default: cityNews, sidebar: sidebar}},
//     {path: '/admin/noticeManage', components: {default: noticeManage, sidebar: sidebar}},
//     {path: '/admin/signin', component: signin}
//   ]
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
