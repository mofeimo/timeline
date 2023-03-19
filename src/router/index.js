import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import IndexView from '../views/index.vue'

let routes = []
routes.push({
		path: '/',
		name: 'index',
		component: IndexView
	},{
		path: '/about',
		name: 'about',
		component: () => import('../views/about.vue')
	},{
		path: '/timeline',
		name: 'timeline',
		component: () => import('../views/timeline.vue')
	}
)

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
