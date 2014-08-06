Rails.application.routes.draw do
  root :to => "pages#index"

  resources :pages, :only => [:index]
  get 'pages/about' => 'pages#about'
  get 'pages/contact' => 'pages#contact'
  resources :weeks
  resources :days
  resources :projects
  resources :homeworks
end


# pages_index GET    /pages/index(.:format)        pages#index
#          root GET    /                             pages#index
#         pages GET    /pages(.:format)              pages#index
# pages_about_path

#         weeks GET    /weeks(.:format)              weeks#index
#               POST   /weeks(.:format)              weeks#create
#      new_week GET    /weeks/new(.:format)          weeks#new
#     edit_week GET    /weeks/:id/edit(.:format)     weeks#edit
#          week GET    /weeks/:id(.:format)          weeks#show
#               PATCH  /weeks/:id(.:format)          weeks#update
#               PUT    /weeks/:id(.:format)          weeks#update
#               DELETE /weeks/:id(.:format)          weeks#destroy
#          days GET    /days(.:format)               days#index
#               POST   /days(.:format)               days#create
#       new_day GET    /days/new(.:format)           days#new
#      edit_day GET    /days/:id/edit(.:format)      days#edit
#           day GET    /days/:id(.:format)           days#show
#               PATCH  /days/:id(.:format)           days#update
#               PUT    /days/:id(.:format)           days#update
#               DELETE /days/:id(.:format)           days#destroy
#      projects GET    /projects(.:format)           projects#index
#               POST   /projects(.:format)           projects#create
#   new_project GET    /projects/new(.:format)       projects#new
#  edit_project GET    /projects/:id/edit(.:format)  projects#edit
#       project GET    /projects/:id(.:format)       projects#show
#               PATCH  /projects/:id(.:format)       projects#update
#               PUT    /projects/:id(.:format)       projects#update
#               DELETE /projects/:id(.:format)       projects#destroy
#     homeworks GET    /homeworks(.:format)          homeworks#index
#               POST   /homeworks(.:format)          homeworks#create
#  new_homework GET    /homeworks/new(.:format)      homeworks#new
# edit_homework GET    /homeworks/:id/edit(.:format) homeworks#edit
#      homework GET    /homeworks/:id(.:format)      homeworks#show
#               PATCH  /homeworks/:id(.:format)      homeworks#update
#               PUT    /homeworks/:id(.:format)      homeworks#update
#               DELETE /homeworks/:id(.:format)      homeworks#destroy
