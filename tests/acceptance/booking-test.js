import { test } from 'qunit';
import moduleForAcceptance from 'green-gables-inn-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | booking');

test('booking information is displayed', function(assert) {
  visit('/booking/1');

  andThen(function() {
    assert.equal(currentURL(), '/booking/1');

    let checkinDatepicker = find('#checkin-datepicker');
    assert.equal(checkinDatepicker.attr('placeholder'), 'From');

    let checkoutDatepicker = find('#checkout-datepicker');
    assert.equal(checkoutDatepicker.attr('placeholder'), 'To');

    let fullName = find('#full-name');
    assert.equal(fullName.attr('placeholder'), 'Full Name');

    let numberOfPeople = find('#number-of-people');
    assert.equal(numberOfPeople.attr('placeholder'), 'Number of People');

    let email = find('#email');
    assert.equal(email.attr('placeholder'), 'Email Address');

    let phone = find('#phone');
    assert.equal(phone.attr('placeholder'), 'Phone Number');

    let comments = find('#comments');
    assert.equal(comments.attr('placeholder'), 'Special Requirements');
  });
});

test('submit reservation', function(assert) {
  assert.expect(0);
  
  visit('/booking/1');
  fillIn('#checkin-datepicker', '10/10/2015');
  fillIn('#checkout-datepicker', '10/12/2015');
  fillIn('#full-name', 'Bob Smith');
  fillIn('#number-of-people', '3');
  fillIn('#email', 'bobsmith@email.com');
  fillIn('#phone', '555-555-5555');
  fillIn('#comments', 'Hello!');
  click('button[type=submit]');
});
