import Ember from 'ember';


export default Ember.Route.extend({
  updateAnnouncementForm: false,
  model() {
    return this.store.findAll("announcement");
  },
  actions: {
    update(announcement, params){
      Object.keys(params).forEach(function (key){
        if (params[key] !== undefined){
          announcement.set(key, params[key]);
        }
      });
      announcement.save();
      this.transitionTo('announcement');
    }
  }
});
