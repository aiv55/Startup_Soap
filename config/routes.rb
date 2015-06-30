Rails.application.routes.draw do
  
  root 'static_pages#program'
  get  'mentorship'  => 'static_pages#mentorship'
  get  'faq'         => 'static_pages#faq'
  get  'get_started' => 'static_pages#get_started'
  resources :charges
  
end