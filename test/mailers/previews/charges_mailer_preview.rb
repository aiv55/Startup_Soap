# Preview all emails at http://localhost:3000/rails/mailers/charges_mailer
class ChargesMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/charges_mailer/customer_welcome
  def customer_welcome
    stripeEmail = 'customer@example.com'
    ChargesMailer.customer_welcome(stripeEmail)
  end

end
