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
        self.convertToDates();
        self.get('reservation').save();
        self.convertFromDates();
      });
    }
  },

  convertToDates() {
    this.set('reservation.startDate', new Date(this.get('reservation.startDate')));
    this.set('reservation.endDate',   new Date(this.get('reservation.endDate')));
  },

  convertFromDates() {
    this.set('reservation.startDate', formatDate(this.get('reservation.startDate')));
    this.set('reservation.endDate',   formatDate(this.get('reservation.endDate')));
  }

});

function formatDate(date) {
  return (date.getMonth() + 1) +
          "/" +  date.getDate() +
          "/" +  date.getFullYear();
}
