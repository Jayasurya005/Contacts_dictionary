import Controller from '@ember/controller';

export default Controller.extend({
actions:{	
  getDetails(x){
      			this.transitionTo("contactdetails");
      		alert(x.rowIndex);
      		}
      		}
});
