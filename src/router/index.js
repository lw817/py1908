import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Regis from '../views/Regis.vue'
import Login from '../views/Login.vue'
import Const from '../views/Const.vue'
import Logto from '../views/Logto.vue'
import Baby from '@/components/Baby.vue'
import Pjshi from '@/components/Pjshi.vue'
import CarLes from '../views/CarLes.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/carles',
    name: 'carles',
    component: CarLes,
	meta:{
		auth:true
	}
  },
  {
    path: '/regis',
    name: 'regis',
    component: Regis
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/const',
    name: 'const',
    component: Const
  },
  {
    path: '/logto',
    name: 'logto',
    component: Logto
  },
  
  {
    path: '/joke',
    name: 'joke',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import (/* webpackChunkName: "about" */ '../views/Joke.vue'),
	meta:{
		auth:true
		}
	},
	  {
		path: "/detail/:id",
		name: "detail",
		component: Detail,
		children:[
			{
				path:"baby",
				name:"baby",
				component:Baby
			},
			{
				path:"pjshi",
				name:"pjshi",
				component:Pjshi
			}
		]
	  } 
]


const router = new VueRouter({
  routes
})
import store from '../store'
// 导航守卫
router.beforeEach((toRouter,fromRouter,next)=>{
	if(toRouter.meta.auth){
		if(store.getters.getLog){
			next();
		}
		// 需要授权，请进入login
		// redirect 意思是 重定向
		// 处理如果登陆成功怎么办
		
	
		else{
			next(`/login?redirect=${toRouter.path}`)
			}
	}	
	else{
		next()
	}
})

export default router

