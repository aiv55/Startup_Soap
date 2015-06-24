class ChargesMailer < ApplicationMailer

  def customer_welcome(stripeEmail)
    mail to: stripeEmail, subject: "Startup Soap - Your first step!"
  end

end
