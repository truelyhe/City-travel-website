import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index/index'
import Index from '@/components/index'
import Login from '@/components/login'
import ArticleDetail from '@/components/articleDetail'
import Tourist from '@/components/frontHead/tourist'
import Impression from '@/components/frontHead/impression'
import Food from '@/components/frontHead/food'
import Magazine from '@/components/frontHead/magazine'
import MagazineDetail from '@/components/frontHead/magazineDetail'
import Hotel from '@/components/frontHead/hotel'
import Message from '@/components/frontHead/message'
import MessageDetail from '@/components/frontHead/messageDetail'
import About from '@/components/about'
import ArticleList from '@/components/admin/articleList'
import ArticleEdit from '@/components/admin/articleEdit'
import CityNews from '@/components/admin/cityNews'
import NewsAdd from '@/components/admin/newsAdd'
import NoticeManage from '@/components/admin/noticeManage'
import DiaryManage from '@/components/admin/diaryManage'
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
      path: '/login',
      name: 'login',
      component: Login
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
      path: '/magazineDetail',
      name: 'magazineDetail',
      component: MagazineDetail
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: Hotel
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/messageDetail',
      name: 'messageDetail',
      component: MessageDetail
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
      path: '/admin/diaryManage',
      name: 'diaryManage',
      component: DiaryManage
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
