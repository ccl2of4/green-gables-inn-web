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
