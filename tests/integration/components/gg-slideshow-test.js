import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('gg-slideshow', 'Integration | Component | gg slideshow', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('images', [1,2,3,4,5]);
  this.render(hbs`{{gg-slideshow images=images}}`);

  assert.ok(this.$('img[src=1]').length > 0);
  assert.ok(this.$('img[src=2]').length > 0);
  assert.ok(this.$('img[src=3]').length > 0);
  assert.ok(this.$('img[src=4]').length > 0);
  assert.ok(this.$('img[src=5]').length > 0);
});
