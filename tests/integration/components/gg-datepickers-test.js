import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gg-datepickers', 'Integration | Component | gg datepickers', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('suite', { price: 500 });
  this.render(hbs`{{gg-datepickers suite=suite}}`);

  assert.equal(this.$('#checkin-datepicker').length, 1, 'Should have checkin datepicker');
  assert.equal(this.$('#checkout-datepicker').length, 1, 'Should have checkout datepicker');
});
