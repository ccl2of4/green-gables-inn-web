import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gg-datepickers', 'Integration | Component | gg datepickers', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{gg-datepickers}}`);

  assert.equal(this.$('#checkin-datepicker').length, 1, 'Should have checkin datepicker');
  assert.equal(this.$('#checkout-datepicker').length, 1, 'Should have checkout datepicker');
});

test('binds properties', function(assert) {
  this.set('dates', {
    checkinDate: '8/20/2012',
    checkoutDate: '9/17/2013'
  });

  this.render(hbs`{{gg-datepickers checkinDate=dates.checkinDate checkoutDate=dates.checkoutDate}}`);
  
  this.$('#checkin-datepicker')
    .val('10/10/2014')
    .trigger('keyup');

  this.$('#checkout-datepicker')
    .val('10/18/2014')
    .trigger('keyup');

  assert.equal(this.get('dates.checkinDate'), '10/10/2014');
  assert.equal(this.get('dates.checkoutDate'), '10/18/2014');
});
