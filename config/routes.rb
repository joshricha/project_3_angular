Rails.application.routes.draw do

  root "application#index"

  namespace :api, defaults: {format: :json} do
    namespace :v1 do

      # will need to add more resources when new models are created
      resources :statistics
    end
  end
end
