require 'test_helper'

class ChargesMailerTest < ActionMailer::TestCase
  test "customer_welcome" do
    mail = ChargesMailer.customer_welcome
    assert_equal "Customer welcome", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
