<template>
	<div class="detail">
		<h2>{{find.title}}</h2>
		<img :src="find.image" alt="">
		<br>
		<button @click="num--"  :disabled="num==1">-</button> {{num}} <button @click="num++" >+</button> <button @click="setAge">购买</button>
		<br>
		<router-link :to="`/detail/${this.$route.params.id}/baby`">宝贝详情</router-link>
		<router-link :to="`/detail/${this.$route.params.id}/pjshi`">评论</router-link>
		<router-view></router-view>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				find:null,
				num:1
			}
		},
		methods:{
			setAge(){
				this.$store.commit("setAge",{
					title:this.find.title,
					price:this.find.price,
					num:this.num
					
				})
			}
		},
		created(){
			console.log(this.$route.params.id);
			this.find={
				id:this.$route.params.id,
				title:`商品${this.$route.params.id}`,
				image:"http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg?thumb=1&w=250&h=250&f=webp&q=90",
				price:parseInt(Math.random()*1000)
				
			}
		},
		
	}
</script>

<style scoped>
	a.router-link-exact-active,a.router-link-active{
		background-color: #7FFF00;
	}
	
</style>
