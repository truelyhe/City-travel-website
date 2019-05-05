import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index/index'
import Index from '@/components/index'
import More from '@/components/frontHead/other/more'
import Login from '@/components/frontHead/login/login'
import ArticleDetail from '@/components/frontHead/other/articleDetail'
import Tourist from '@/components/frontHead/tourist/tourist'
import Impression from '@/components/frontHead/impression/impression'
import Food from '@/components/frontHead/food/food'
import Magazine from '@/components/frontHead/magazine/magazine'
import MagazineDetail from '@/components/frontHead/magazine/magazineDetail'
import Hotel from '@/components/frontHead/hotel/hotel'
import Message from '@/components/frontHead/message/message'
// import MessageDetail from '@/components/frontHead/message/messageDetail'
import About from '@/components/frontHead/other/about'
import ArticleList from '@/components/admin/article/articleList'
import ArticleEdit from '@/components/admin/article/articleEdit'
import CityNews from '@/components/admin/news/cityNews'
import NewsAdd from '@/components/admin/addPage'
import NoticeManage from '@/components/admin/notice/noticeManage'
import DiaryManage from '@/components/admin/diary/diaryManage'
import MessageManage from '@/components/admin/messageManage/messageManage'
import UserManage from '@/components/admin/userManage/userManage'
import Signin from '@/components/admin/signin/signin'

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
      path: '/more',
      name: 'more',
      component: More
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      // path: '/articleDetail/:id',
      path: 'articleDetail',
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
    // {
    //   path: '/messageDetail',
    //   name: 'messageDetail',
    //   component: MessageDetail
    // },
    {
      path: '/admin/article/articleList',
      name: 'articleList',
      component: ArticleList
    },
    {
      path: '/admin/article/articleEdit',
      name: 'articleEdd',
      component: ArticleEdit
    },
    {
      path: '/admin/article/articleEdit/:id',
      name: 'articleEdit',
      component: ArticleEdit
    },
    {
      path: '/admin/news/newsAdd',
      name: 'newsAdd',
      component: NewsAdd
    },
    {
      path: '/admin/news/cityNews',
      name: 'cityNews',
      component: CityNews
    },
    {
      path: '/admin/notice/noticeManage',
      name: 'noticeManage',
      component: NoticeManage
    },
    {
      path: '/admin/diary/diaryManage',
      name: 'diaryManage',
      component: DiaryManage
    },
    {
      path: '/admin/messageManage',
      name: 'messageManage',
      component: MessageManage
    },
    {
      path: '/admin/diary/userManage',
      name: 'userManage',
      component: UserManage
    },
    {
      path: '/admin/signin/signin',
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
