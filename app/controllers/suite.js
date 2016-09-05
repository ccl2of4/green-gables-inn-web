import Ember from 'ember';

export default Ember.Controller.extend({
  slideshowImages: function() {
    let res = images['The Green Gables Suite'];
    console.log(res);
    return res;
  }.property()
});

let images = {
  "The Green Gables Suite" : [
    "assets/images/slides/the-green-gables-suite/1.jpg",
    "assets/images/slides/the-green-gables-suite/2.jpg",
    "assets/images/slides/the-green-gables-suite/3.jpg",
    "assets/images/slides/the-green-gables-suite/4.jpg",
    "assets/images/slides/the-green-gables-suite/5.jpg",
    "assets/images/slides/the-green-gables-suite/6.jpg",
    "assets/images/slides/the-green-gables-suite/7.jpg",
    "assets/images/slides/the-green-gables-suite/8.jpg"]
}
