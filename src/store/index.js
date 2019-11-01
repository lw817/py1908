import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Cookie from 'js-cookie'
export default new Vuex.Store({
  state: {
	  goods:[],
	  isLog:false
	  
  },
  getters:{
	  getLog(state){
		  return state.isLog||Cookie.get("islog");
	  }
  },
  mutations: {
	  setLog(state,log){
		  
		  state.isLog=log;
		  if(log){
			  Cookie.set("islog",true);
		  }
		  else{
			  Cookie.remove("islog")
		  }
	  },
	  setAge(state,item){
		  let canAdd=true;
		  state.goods.forEach(good=>{
			  if(good.id==item.id){
				  good.num+=item.num;
				  canAdd=false;
			  }
		  })
		  if(canAdd){
			  state.goods.push(item)
		  }
	  }
	  
  },
  actions: {
	  
  },
  modules: {
  }
})