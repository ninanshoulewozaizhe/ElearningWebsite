import Vue from 'vue'
import Router from 'vue-router'
import homeHead from '../components/head'
import menubar from '../components/menu'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
 		{
 			path: '/',
 			redirect: '/home'
 		},
 		{
 			path: '/home',
 			name: 'home',
 			components: {head: homeHead, menubar: menubar}
 		}
	]
})