<template>
	<div>
		<div id="mainMenu">
			<router-link to="/home">主页</router-link>
			<router-link to="/home" @mouseenter.native='showIndex = 1' >学校概况</router-link>
			<router-link to="/home" @mouseenter.native='showIndex = 2'>学科与师资</router-link>
			<router-link to="/home" @mouseenter.native='showIndex = 3'>教育教学</router-link>
			<router-link to="/home" @mouseenter.native='showIndex = 4'>教师信息</router-link>
		</div>
		<span id="childMenu1" v-if="showIndex == 1" @mouseleave='showIndex = 0'>
				<router-link to="/home" >Elearning简介</router-link>
				<router-link to="/home" >Elearning负责人</router-link>
		</span>
		<span id="childMenu2" v-if="showIndex == 2" @mouseleave='showIndex = 0'>
				<router-link to="/home">学科分类</router-link>
				<router-link to="/home" >人才名录</router-link>
				<router-link to="/home" >名师垂范</router-link>
		</span>
		<span id="childMenu3" v-if="showIndex == 3" @mouseleave='showIndex = 0'>
				<router-link to="/home">小学教育</router-link>
				<router-link to="/home" >初中教育</router-link>
				<router-link to="/home" >高中教育</router-link>
		</span>
		<span id="childMenu4" v-if="showIndex == 4" @mouseleave='showIndex = 0'>
				<router-link to="/home">小学教师</router-link>
				<router-link to="/home" >初中教师</router-link>
				<router-link to="/home" >高中教师</router-link>
		</span>
	</div>
</template>

<script>
export default {
	name: 'menubar',
	data () {
		return {
		  showIndex: 0
		}
	}
}
</script>

<style>
.router-link-exact-active {
background-color: red;
}

#mainMenu {
border-top: 3px bold white;
}
</style>
