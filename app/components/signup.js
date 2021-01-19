import Component from '@ember/component';
import EmberObject from '@ember/object';

export default Component.extend({

actions:{	

send(){
		var list=[];
		var jsonString = localStorage.getItem("personsList");
		var obj=JSON.parse(jsonString);
		for(var i in obj) {
			list.push(obj[i]);
		}
		list.pop();
        var fname = document.getElementById("firstName").value;
        var lname = document.getElementById("lastName").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var prof = document.getElementById("profession").value;
        var country = document.getElementById("country").value;
        var phoneno =  /^[0-9]{5} [0-9]{5}$/;
        var emailid="^[a-zA-Z0-9+_.-]+@gmail.com$";
        if(fname===""||lname===""||phone===""||email===""||prof===""||country===""){
       alert("please fill all the details");
        }
        else {
	if(phone.match(phoneno)){
		if(email.match(emailid)){
		const Person = EmberObject.extend({
		  helloWorld() {
    			list.push(con);
    			
    			localStorage.setItem("personsList", JSON.stringify(list));
      			window.location.href = 'http://localhost:4200/contacts';
    			}
		});

		let con = Person.create({
 		 fname: fname+" "+lname,
 		 phone: phone,
 		 email: email,
 		 prof: prof,
 		 country: country
		});

		con.helloWorld();			
		}
		else{
		alert("Email id must end with @gmail.com");
		}
	}        
	else{
	alert("Phone number format like 91234 56789");
	}
        }
}
}
});



