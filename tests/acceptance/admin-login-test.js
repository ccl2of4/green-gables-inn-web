import { test } from 'qunit';
import moduleForAcceptance from 'green-gables-inn-web/tests/helpers/module-for-acceptance';
import ENV from 'green-gables-inn-web/config/environment';

moduleForAcceptance('Acceptance | admin login');

test('visit admin login page', function(assert) {
  visit('/');
  click('a:contains("Admin")');
  andThen(() => assert.equal(currentURL(), '/admin/login'));
});

test('successful login', function(assert) {
  assert.expect(1);

  visit('/admin/login');
  fillIn("#username", ENV['admin-username']);
  fillIn('#password', ENV['admin-password']);
  click('button[type=submit]');

  andThen(() => {
    assert.equal(currentURL(), '/admin');
  });
});

test('failed login', function(assert) {
  assert.expect(1);

  visit('/admin/login');
  fillIn("#username", 'wrong-username');
  fillIn('#password', 'wrong-password');
  click('button[type=submit]');

  andThen(() => {
    assert.equal(currentURL(), '/admin/login');
  });
});
