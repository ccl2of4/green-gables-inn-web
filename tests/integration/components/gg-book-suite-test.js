import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gg-book-suite', 'Integration | Component | gg book suite', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('suite', { price: 500 });
  this.render(hbs`{{gg-book-suite suite=suite}}`);

  assert.notEqual(this.$().text().indexOf('$500'), -1);
});
