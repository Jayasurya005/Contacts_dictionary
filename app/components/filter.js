import Component from '@ember/component';

export default Component.extend({
actions:{
send(){
document.getElementById("table").style.display = "none";
document.getElementById("table1").style.visibility = "visible";
var country=document.getElementById("country").value;
if(country==="None"){
var List=this.get('list');
this.set('List',List);
}
else{
var List=this.get('list').filterBy('country', country);
this.set('List',List);
}
},
getDetails(){
      		let table =document.getElementById('table').getElementsByTagName('tbody')[0];
      		for(let i=0;i<table.rows.length;i++)
      		{
      		table.rows[i].onclick = function()
      		{
      		click(this);
      		//this.transitionTo('contactdetails');
      		window.location.href="http://localhost:4200/contacts/contactdetails";
      		};
      		}
      		function click(row){
      		localStorage.setItem("phoneno",row.cells[1].innerHTML);
      		   
      		}
      		 },
      		 getDetail(){
      		let table1 =document.getElementById('table1').getElementsByTagName('tbody')[0];
      		for(let i=0;i<table1.rows.length;i++)
      		{
      		table1.rows[i].onclick = function()
      		{
      		click(this);
      		//this.transitionTo('contactdetails');
      		window.location.href="http://localhost:4200/contacts/contactdetails";
      		};
      		}
      		function click(row){
      		localStorage.setItem("phoneno",row.cells[1].innerHTML);
      		   
      		}
      		 }
}
})
