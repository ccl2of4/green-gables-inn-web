import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('suite', params.suite_id);
  },
  setupController(controller, model) {
    controller.set('model', model);
    controller.set('reservation', this.get('store').createRecord('reservation'));
  }
});
