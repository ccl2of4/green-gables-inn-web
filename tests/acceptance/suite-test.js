import { test } from 'qunit';
import moduleForAcceptance from 'green-gables-inn-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | suite');

test('suite information is displayed', function(assert) {

  visit('/suite/1');
  andThen(() => {
    let name  = find('.suite-name-lg');
    assert.equal(name.text(), 'The Green Gables Suite');
    let price = find('.suite-price');
    assert.equal(price.text(), '$250');
  });

  visit('/suite/2');
  andThen(() => {
    let name  = find('.suite-name-lg');
    assert.equal(name.text(), 'The Porch Suite');
    let price = find('.suite-price');
    assert.equal(price.text(), '$350');
  });

});

test('navigate to booking', function(assert) {
  visit('/suite/1');
  click('button.book-suite-btn');
  andThen(() => {
    assert.equal(currentURL(), '/booking/1');
  });
});
