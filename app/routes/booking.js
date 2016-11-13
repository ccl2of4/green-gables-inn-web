import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('suite', params.suite_id);
  },
  setupController(controller, model) {
    controller.set('suite', model);
    controller.set('client', this.get('store').createRecord('client'));
    controller.set('reservation', this.get('store').createRecord('reservation'));
    controller.set('reservation.suiteId', model.id);
  }
});
