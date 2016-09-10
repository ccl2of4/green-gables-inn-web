import { test } from 'qunit';
import moduleForAcceptance from 'green-gables-inn-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | suites');

test('visit individual suite from suites', function(assert) {
  visit('/suites');
  click('a:contains("The Green Gables Suite")');
  andThen(() => assert.equal(currentURL(), '/suite/1'));

  visit('/suites');
  click('a:contains("The Porch Suite")');
  andThen(() => assert.equal(currentURL(), '/suite/2'));
});
