<template>
	<div>
		
		<div class="logto">
			
			<button @click="logtos" type="primary">退出</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			logtos(){
				this.$http({
					method:'post',
					url:'http://www.520mg.com/member/index_login.php',
					data:`dopost=exit`,
					
					withCredentials:true,
				}).then((res)=>{
					if(res.data.status==1){
						console.log("退出成功");
						this.$store.commit("setLog",false);
						this.$router.push('/')
					}
					
						
					
				})
			}
		}
	}
</script>

<style>
</style>
