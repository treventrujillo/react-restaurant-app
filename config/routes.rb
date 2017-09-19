Rails.application.routes.draw do
  namespace :api do 
    resources :dishes, except: [:new, :edit]
  end

  get "*other", to: "static#index"
end

