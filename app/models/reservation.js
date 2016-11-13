import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  suiteId: attr(),
  clientId: attr(),
  startDate: attr(),
  endDate: attr(),
  numberOfPeople: attr(),
  comment: attr()
});
