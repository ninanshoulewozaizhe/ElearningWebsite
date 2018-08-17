<template>
	<div>
	<div id="container">
	<img id="logo" src="../assets/logo.png">
	<div id="elearning">
		<img id="name" src="../assets/elearning.png">
	</div>
	<el-input id="searchBar"
    placeholder="请输入内容"
    prefix-icon="el-icon-search"
    v-model="searchContent">
  </el-input>
  <el-button id="searchButton" type="primary"  @click="search">搜索</el-button>
  </div>
  </div>
</template>

<script>
export default {
	name: 'homeHead',
	data () {
		return {
			searchContent: ''
		}
	},
	methods: {
		search: function () {

		}
	}
}
</script>

<style type="text/css">
#container {
	justify-content: flex-start;
	flex-wrap: nowrap;
	overflow: hidden;
	height: 100px;
	border-bottom: 3px bold white;
	background-color: lightgray;
}

#logo {
	height: 90px;
	width: 90px;
	float: left;
}

#elearning {
	height: 100px;
	width: 400px;
	overflow: hidden;
	float: left;
}

#name {
	position: absolute;
	clip: rect(0px 400px 200px 0px);
}

.el-input {
 	top: 50px;
 	width: 200px;
 	margin-left: 200px;
}

#searchButton {
	position: relative;
 	top: 50px;
}

</style>
