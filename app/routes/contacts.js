import Route from '@ember/routing/route';

export default Route.extend({
model() {
var list=[];
		var jsonString = localStorage.getItem("personsList");
		var obj=JSON.parse(jsonString);
		for(var i in obj) {
			list.push(obj[i]);
		}
		list.pop();
		  return list;
    
  }
});

