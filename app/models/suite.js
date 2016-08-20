import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  summary: attr(),
  amenitites: attr(),
  thumbnail: attr(),
  images: attr(),
  price: attr()
});
