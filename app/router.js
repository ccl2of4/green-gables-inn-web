import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('suites');
  this.route('suite', { path: '/suite/:suite_id' });
  this.route('specials');
  this.route('booking', { path: '/booking/:suite_id'});
});

export default Router;
