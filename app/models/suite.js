import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  price: attr(),

  // These are properties not provided by the API but they need to be
  // used in a few places in the application.
  summary: function() {
    return getProp(this.get('name'), 'summary');
  }.property('name'),

  amenities: function() {
    return getProp(this.get('name'), 'amenities');
  }.property('name'),

  thumbnail: function() {
    return getProp(this.get('name'), 'thumbnail');
  }.property('name')

});

function getProp(suiteName, propName) {
  return expectedSuites[suiteName][propName];
}

// All suites have the same amenities, but that could change.
let amenities = [
  "Luxurious Linens",
  "Terrific Terry Towels",
  "Hair Dryer",
  "Iron and Iron Board",
  "Free Wifi",
  "Free Parking",
  "Pots and Pans",
  "Dishes and Dish Towels",
  "Coffee Pot",
  "Tea Kettle",
  "Cutlery",
  "Assortment of Glasses",
  "Outdoor dishes and glassware",
  "TV with Cable",
  "Use of Front Porch and Back Yard"
];

let expectedSuites = {
    "The Green Gables Suite" : {
      thumbnail: "assets/images/suites/the-green-gables-suite.jpg",
      summary: "This is a two-story suite. The upper floor has a bedroom with a queen sized bed, sitting area and 1/2 bath. The first floor has a single bedroom, full bath, kitchen, and a living / dining room combination. There is a queen sleeper sofa in the living room. There is also a back outdoor staircase that leads into the suite, in addition to the front door entrance. (Minimum 2-night stay)",
      amenities: amenities
    },
    "The Porch Suite" : {
      thumbnail: "assets/images/suites/the-porch-suite.jpg",
      summary: "The Porch Suite is on the first floor of the Inn, and has one bedroom with a queen sized bed and 1 1/2 baths. The living room has a queen size sofa-bed and the 1/2 bath is off the living room. The kitchen is large and overlooks the rear garden. (Minimum 2-night stay)",
      amenities: amenities
    },
    "The Crows Nest" : {
      thumbnail: "assets/images/suites/the-crows-nest.jpg",
      summary: "The Crows Nest is off to the side front of the Inn, and has large windows overlooking the front yard. There is one bedroom and bath and a kitchen/dining area off the living area. The suite has a private entrance off the main porch. Pet friendly. (Minimum 2-night stay)",
      amenities: amenities
    },
    "Anne's Corner" : {
      thumbnail: "assets/images/suites/annes-corner.jpg",
      summary: "A one bedroom with a queen sized bed, one bath suite with a combination living /dining area. The living room has a queen sized sleeper sofa. The suite has a full kitchen and bath. Radiant heat floors maintain the appropriate temperature all year long. Anne’s Corner is located on the ground floor. This suite has a private entrance. Pet Friendly. (Minimum 2-night stay)",
      amenities: amenities
    }
};
