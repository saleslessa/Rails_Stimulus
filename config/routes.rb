Rails.application.routes.draw do
  resources :todos
  get 'list_items', to: "todos#list_items"

  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'home/get_something', to: 'home#get_something'
end
