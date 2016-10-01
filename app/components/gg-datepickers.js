import Ember from 'ember';
import $ from 'jquery';

// TODO: Write tests for this.
// The datepickers render outside the ember-view div, so it's difficult to
// find them during integration/acceptance tests....
export default Ember.Component.extend({

  setup: function() {

    let checkinDatepicker = $('#checkin-datepicker')
      .on('keydown', () => { return false; })
      .datepicker()
      .datepicker('setStartDate', new Date())
      .datepicker('setDisabledDates', this.get('reservedDates'))
      .on('change', () => { this.adjustCheckoutDate(checkinDatepicker, checkoutDatepicker); });

    let checkoutDatepicker = $('#checkout-datepicker')
      .on('keydown', () => { return false; })
      .datepicker()
      .datepicker('setStartDate', this.getCheckoutStartDate(checkinDatepicker))
      .datepicker('setDisabledDates', this.get('reservedDates'));


  }.on('didInsertElement'),

  getCheckoutStartDate : function(checkinDatepicker) {
    let checkoutStartDate = new Date(
      checkinDatepicker.datepicker('getDate') || checkinDatepicker.datepicker('getStartDate'));

    // Checkout date must be no earlier than two days after checkin date.
    checkoutStartDate.setDate(checkoutStartDate.getDate() + 2);
    return checkoutStartDate;
  },

  // Sets the start date of checkout datepicker, and if the start date is after
  // the selected date, clears the selected date.
  adjustCheckoutDate : function(checkinDatepicker, checkoutDatepicker) {
    checkoutDatepicker.datepicker('setStartDate', this.getCheckoutStartDate(checkinDatepicker));
    if (checkoutDatepicker.datepicker('getDate') < checkoutDatepicker.datepicker('getStartDate')) {
      checkoutDatepicker.datepicker('setDate', '');
    }
  }

});
