Rails.application.routes.draw do
  root :to => "pages#index"

  resources :pages, :only => [:index]
  get 'pages/about' => 'pages#about'
  get 'pages/contact' => 'pages#contact'
  resources :weeks, :only => [:index]
  resources :projects, :only => [:index]
end


#          root GET  /                        pages#about
#         pages GET  /pages(.:format)         pages#index
#   pages_about GET  /pages/about(.:format)   pages#about
# pages_contact GET  /pages/contact(.:format) pages#contact
#         weeks GET  /weeks(.:format)         weeks#index
#      projects GET  /projects(.:format)      projects#index