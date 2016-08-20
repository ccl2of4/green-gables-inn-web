import Ember from 'ember';
//import { suites } from '../data';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('suite');
    //return suites;
  }
});
