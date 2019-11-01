<template>
	<div>
		<h2>宝贝信息dahdjha</h2>
		<div></div>
	</div>
</template>

<script>
	export default{
		created(){
			console.log(this.$route.params.id);
			this.findInfo={
				
			}
		},
		data(){
			return{
				findInfo:null,
			};
		}
		
		
	}
</script>

<style>
</style>
