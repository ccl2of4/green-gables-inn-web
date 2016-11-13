import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  fullName: attr(),
  emailAddress: attr(),
  phoneNumber: attr()
});
