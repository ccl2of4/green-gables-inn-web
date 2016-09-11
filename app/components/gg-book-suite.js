import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({

  setup: function() {

    let checkinDatepicker = $('#checkin-datepicker')
      .datepicker()
      .on('keydown', () => { return false; })
      .on('show', () => {
        checkinDatepicker.datepicker('setStartDate',     new Date())
                         .datepicker('setDisabledDates', this.get('reservedDates'));
      });

    let checkoutDatepicker = $('#checkout-datepicker')
      .datepicker()
      .on('keydown', () => { return false; })
      .on('show', () => {
        checkoutDatepicker.datepicker('setStartDate',     this.getCheckoutStartDate(checkinDatepicker))
                          .datepicker('setDisabledDates', this.get('reservedDates'));
      });

  }.on('didInsertElement'),

  getCheckoutStartDate : function(checkinDatepicker) {
    let checkoutStartDate = new Date();
    let checkinDate       = checkinDatepicker.datepicker('getDate');
    if (checkinDate) {
      checkoutStartDate.setDate(checkinDate.getDate() + 2);
    }
    return checkoutStartDate;
  }

});
