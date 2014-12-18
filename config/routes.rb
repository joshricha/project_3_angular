Rails.application.routes.draw do

  devise_for :users
  root "application#index"

  resources :statistics

  namespace :api, defaults: {format: :json} do
    namespace :v1 do

      # will need to add more resources when new models are created
      resources :statistics, :meditations
      get "/current_user" => "users#get_current_user"
      get "/api/v1/statistics/:id" => "statistics#user_stats"

    end
  end
end
