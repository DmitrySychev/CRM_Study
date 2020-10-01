Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # localhost:3000/api/v1/login
  namespace :webhooks do
    resource :twilio, controller: :twilio, only: [:create]
  end

  get '/auth/google_oauth2/callback' => 'users/omniauth_callbacks#google_oauth2'
  
  resources :clients
  resources :new_inventories
  resources :tasks
  resources :communications
  resources :messages
  resources :emails

  get '/appointments', to: 'tasks#appointments'
  get '/appointments_dash', to: 'tasks#appointments_dash'
  get '/tasks_dash', to: 'tasks#tasks_dash'
  get '/tasks_all', to: 'tasks#tasks_all'
  get '/last_client', to: 'clients#last_client'
  get '/client_cont', to: 'clients#client_cont'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]

      post '/login', to: 'auth#create'
      get '/profile', to: 'users#profile'
      
    end
  end
end

