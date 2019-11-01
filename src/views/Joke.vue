<template>
  <div class="joke">
    <h1>笑话</h1>
	<div v-for="item in myself">
		<div v-if="item.title">
			<h2>{{item.title}}</h2>
			<p>{{item.summary}}</p>
		</div>
		
				
	</div>
	<button  :disabled="flag"  class="more" type="primary"  @click="getMore">加载更多</button>
	
  </div>
</template>

<script>
	// import axios from 'axios'
	export default{
		data(){
			return {
				myself:[],
				page:1,
				flag:false
				
			}
			
		},
		created(){
			this.getWill(this.page)
		},
		methods:{
			getMore(){
				this.page++;
				this.getWill(this.page);
			},
			getWill(page){
				this.flag=true;
				this.$http({
					method: 'get',
					url: `http://biger.applinzi.com/duan/list.php?page=${this.page}`,	
				}).then(res=>{
					this.myself=this.myself.concat(res.data.result);
					this.flag=false;
						
				
				})
			}
		}
		
	}
</script>
<style>

</style>
