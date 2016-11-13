import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    submit: function() {
      let self = this;

      // Need to first save client so that we can set the clientId on the reservation.
      // The suiteId is already on the reservation, since the suite already exists
      // (it's set by the route).
      self.get('client').save().then(function() {
        self.set('reservation.clientId', self.get('client.id'));
        self.get('reservation').save();
      });
    }
  },
});
