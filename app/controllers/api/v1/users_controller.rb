module Api
  module V1
    class UsersController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def get_current_user
        if user_signed_in?
          render :json => current_user
        else
          redirect_to "/users/sign_up"
        end
      end

    end
  end
end