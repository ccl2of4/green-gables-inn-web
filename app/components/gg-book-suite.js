import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({

  setup: function() {

    $('#checkin-datepicker')
      .on('keydown', () => {
        return false;
      })
      .datepicker('setStartDate', new Date());

    $('#checkout-datepicker')
      .on('keydown', () => {
        return false;
      })
      .datepicker('setStartDate', new Date());

  }.on('didInsertElement'),

});
