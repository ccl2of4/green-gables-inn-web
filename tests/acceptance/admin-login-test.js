import { test } from 'qunit';
import moduleForAcceptance from 'green-gables-inn-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | admin login');

test('visit admin login page', function(assert) {
  visit('/');
  click('a:contains("Admin")');
  andThen(() => assert.equal(currentURL(), '/admin/login'));
});

test('fill in admin login page', function(assert) {
  assert.expect(0);

  visit('/admin/login');
  fillIn('#password', '12345');
  click('button[type=submit]');
});
