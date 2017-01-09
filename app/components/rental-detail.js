import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental){
      if (confirm('Are your sure you want to delete this entry?')){
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
