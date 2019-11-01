<template>
	<div class="carles">
		<div>
			<table cellpadding="" cellspacing="" border="">
				<tr>
					<th>商品名称</th>
					<th>价格</th>
					<th>数量</th>
				</tr>
				<tr v-for="item in $store.state.goods">
					<td>{{item.title}}</td>
					<td>{{item.price}}</td>
					<td> 
					<button @click="reduce(item)" :disabled="item.num==0">-</button>
					<span>{{item.num}}</span>
					<button >+</button>
					</td>
					
					
				</tr>
				
			</table>
			
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
			reduce(item){
				item.num--;
			}
		}
		
	}

	
</script>

<style>
	.carles {
		display: flex;
		justify-content: center;
	
		
	}

</style>
