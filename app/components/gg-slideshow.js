import Ember from 'ember';

export default Ember.Component.extend({

  setup: function() {
    this.$('.slideshow').slick({
      autoplay: true,
      arrows:   false,
    });
  }.on('didInsertElement')

});
