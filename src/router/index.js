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
		// route level code-splitting
		// this generates a separate chunk (About.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/about.vue')
	})

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
