import Route from '@ember/routing/route';

export default Route.extend({
model() {
var list=[];
		var jsonString = localStorage.getItem("personsList");
		var obj=JSON.parse(jsonString);
		for(var j in obj) {
			list.push(obj[j]);
		}
		var phoneno = localStorage.getItem("personsList");
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

