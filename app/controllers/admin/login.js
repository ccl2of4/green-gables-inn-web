import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    submit: function() {
      Ember.$.ajax('/api/login', {
        username:this.get('username'),
        password:this.get('password')
      }).then(() => {
        this.transitionToRoute('admin');
      }, () => {

      });
    }
  },

});
