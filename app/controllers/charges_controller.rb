class ChargesController < ApplicationController

def index
end

def new
end

def create
  # Amount in cents
  @amount = 25000

  customer = Stripe::Customer.create(
    :email => params[:stripeEmail],
    :card  => params[:stripeToken]
  )

  charge = Stripe::Charge.create(
    :customer       => customer.id,
    :amount         => @amount,
    :description    => 'Startup Soap - 1 month of mentorship',
    :currency       => 'usd',
    :receipt_email  => params[:stripeEmail]
  )
  
rescue Stripe::CardError => e
  flash[:error] = e.message
  redirect_to charges_path
end

end