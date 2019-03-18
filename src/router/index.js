import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index/index'
import Index from '@/components/index'
import ArticleDetail from '@/components/articleDetail'
import Tourist from '@/components/frontHead/tourist'
import Impression from '@/components/frontHead/impression'
import Food from '@/components/frontHead/food'
import Magazine from '@/components/frontHead/magazine'
import About from '@/components/about'
import ArticleList from '@/components/admin/articleList'
import ArticleEdit from '@/components/admin/articleEdit'
import CityNews from '@/components/admin/cityNews'
import NewsAdd from '@/components/admin/newsAdd'
import NoticeManage from '@/components/admin/noticeManage'
import Signin from '@/components/admin/signin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/articleDetail/:id',
      name: 'articleDetail',
      component: ArticleDetail
    },
    {
      path: '/tourist',
      name: 'tourist',
      component: Tourist
    },
    {
      path: '/impression',
      name: 'impression',
      component: Impression
    },
    {
      path: '/food',
      name: 'food',
      component: Food
    },
    {
      path: '/magazine',
      name: 'magazine',
      component: Magazine
    },
    {
      path: '/admin/articleList',
      name: 'articleList',
      component: ArticleList
    },
    {
      path: '/admin/articleEdit',
      name: 'articleEdd',
      component: ArticleEdit
    },
    {
      path: '/admin/articleEdit/:id',
      name: 'articleEdit',
      component: ArticleEdit
    },
    {
      path: '/admin/newsAdd',
      name: 'newsAdd',
      component: NewsAdd
    },
    {
      path: '/admin/cityNews',
      name: 'cityNews',
      component: CityNews
    },
    {
      path: '/admin/noticeManage',
      name: 'noticeManage',
      component: NoticeManage
    },
    {
      path: '/admin/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
