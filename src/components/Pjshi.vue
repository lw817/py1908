<template>
	<div>
		<h1>评论信息</h1>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				pjshiInfo:null
			}
		},
		created(){
			console.log(this.$route.params.id);
			this.pjshiInfo={
				
			}
		}
		
	}
</script>

<style>
</style>
