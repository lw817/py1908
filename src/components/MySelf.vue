<template>
	<div class="consit" @mouseenter="stop" @mouseleave="reduce">
		
			<img    v-for="(item,index) in  items"  v-show="index==currentIndex"  :src="item" alt="" :key="item">
			<div class="numtp"  :class="{active:currentIndex==index}" v-for="(item,index) in items" @click="currentIndex=index">
		
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				currentIndex:0,
				playing:true,
				interval:null
			}
		},
		created(){
			this.play();
		},
		destroyed(){
			clearInterval(this.interval);
		},
			
		methods:{
			play(){
				this.interval=setInterval(()=>{
					if(this.playing){
						this.currentIndex++;
						if(this.currentIndex>=this.items.length){
							this.currentIndex=0;
						}
						
					}
				},3000)
			},
			stop(){
				this.playing=false;
			},
			reduce(){
				this.playing=true;
			}
			
			
		},
		props:["items"]
	}
</script>

<style>
	.consit  img{
		width: 100%;
	}
	
	.consit .numtp{
		display: inline-block;
		width: 9px;
		height: 9px;
		border-radius: 9px;
		margin: 6px;
		position: relative;
		top: -50px;
		background-color: #00FFFF;
		z-index: 10;
	}
	.consit  .active{
		background-color: white;
	}
	
	
	
</style>
