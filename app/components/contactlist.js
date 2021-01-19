import Component from '@ember/component';

export default Component.extend({
model() {
var list=[];
		var jsonString = localStorage.getItem("personsList");
		var obj=JSON.parse(jsonString);
		for(var i in obj) {
			list.push(obj[i]);
		}
		  return list;
    
  }
});
