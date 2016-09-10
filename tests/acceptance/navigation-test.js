import { test } from 'qunit';
import moduleForAcceptance from 'green-gables-inn-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | navigation');

test('click navigation links', function(assert) {

  visit('/');
  andThen(() => assert.equal(currentURL(), '/'));

  click('a:contains("Home")');
  andThen(() => assert.equal(currentURL(), '/'));

  click('a:contains("Our Suites")');
  andThen(() => assert.equal(currentURL(), '/suites'));

  click('a:contains("Specials")');
  andThen(() => assert.equal(currentURL(), '/specials'));
});
