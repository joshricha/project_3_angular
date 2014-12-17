Rails.application.routes.draw do

  devise_for :users
  root "application#index"

  namespace :api, defaults: {format: :json} do
    namespace :v1 do

      # will need to add more resources when new models are created
      resources :statistics, :meditations
    end
  end
end
