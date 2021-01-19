import Route from '@ember/routing/route';
import { isEqual } from '@ember/utils';

export default Route.extend({
model() {
var list=[];
		var jsonString = localStorage.getItem("personsList");
		var obj=JSON.parse(jsonString);
		for(var i in obj) {
			list.push(obj[i]);
		}
		var phoneno = localStorage.getItem("phoneno");
		for(var i=0;i<list.length;i++){
		if(list[i]!=null){
		var x=list[i].phone;
		if(phoneno.includes(x)){
		return list[i];
		}
			}
		  }
  }
});

