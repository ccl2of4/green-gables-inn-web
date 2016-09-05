import Ember from 'ember';

export default Ember.Controller.extend({
  slideshowImages: function() {
    let suiteName = this.get('model.name');
    return images[suiteName];
  }.property('model.name')
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
    "assets/images/slides/the-green-gables-suite/8.jpg"
  ],
  "The Porch Suite" : [
    "assets/images/slides/the-porch-suite/1.jpg",
    "assets/images/slides/the-porch-suite/2.jpg",
    "assets/images/slides/the-porch-suite/3.jpg",
    "assets/images/slides/the-porch-suite/4.jpg",
    "assets/images/slides/the-porch-suite/5.jpg",
  ],
  "The Crows Nest" : [
    "assets/images/slides/the-crows-nest/1.jpg",
    "assets/images/slides/the-crows-nest/2.jpg",
    "assets/images/slides/the-crows-nest/3.jpg",
    "assets/images/slides/the-crows-nest/4.jpg",
    "assets/images/slides/the-crows-nest/5.jpg",
  ],
  "Anne's Corner" : [
    "assets/images/slides/annes-corner/1.jpg",
    "assets/images/slides/annes-corner/2.jpg",
    "assets/images/slides/annes-corner/3.jpg",
    "assets/images/slides/annes-corner/4.jpg",
    "assets/images/slides/annes-corner/5.jpg",
  ]
};
