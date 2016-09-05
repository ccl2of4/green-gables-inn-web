import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gg-suite', 'Integration | Component | gg suite', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('suite', { name:'foo', summary:'bar'});
  this.render(hbs`{{gg-suite suite=suite}}`);

  assert.notEqual(this.$().text().indexOf('foo'), -1);
  assert.notEqual(this.$().text().indexOf('bar'), -1);
});
