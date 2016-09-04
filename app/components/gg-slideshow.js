import Ember from 'ember';

export default Ember.Component.extend({

  setup: function() {
    this.$('.slideshow').slick({
      autoplay: true,
      arrows:   false,
    });
  }.on('didInsertElement'),

  images: [
    "assets/images/slides/1.jpg",
    "assets/images/slides/2.jpg",
    "assets/images/slides/3.jpg",
    "assets/images/slides/4.jpg",
    "assets/images/slides/5.jpg",
    "assets/images/slides/6.jpg",
    "assets/images/slides/7.jpg",
    "assets/images/slides/8.jpg",
    "assets/images/slides/9.jpg",
    "assets/images/slides/10.jpg"]

});
