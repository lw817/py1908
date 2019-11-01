<template>
	<div>
		<h2>登录</h2>
		用户名 ：<input type="text" v-model="user.name">
		<br>
		密码 ：	<input type="text" v-model="user.pwd">
		<br>
		<button @click="login">登录</button>    <button >注册</button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				user:{
					name:"zzy0371",
					pwd:"zzy0371"
					
				}
			}
		
		},
		methods:{
			login(){
				this.$http({
					method:'post',
					url:`http://www.520mg.com/member/index_login.php`,
					data:`fmdo=login&dopost=login&userid=${this.user.name}&pwd=${this.user.pwd}`,
					withCredentials:true,
				}).then(res=>{
					if(res.data.status==1){
						console.log("登录成功");
						this.$store.commit("setLog",true);
						
						if(this.$route.query.redirect){
							this.$router.push(this.$route.query.redirect)
						}
						else{
							this.$router.push('/')
						}
						
					}
					else{
						console.log("登陆失败")
					}
				})
			}
		}
		
	}
</script>

<style>
</style>
