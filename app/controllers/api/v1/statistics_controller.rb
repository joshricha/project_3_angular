module Api
  module V1
    class StatisticsController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        respond_with(Statistic.all)
      end

      def show
        respond_with(Statistic.find(params[:id]))
      end

      def create

        # redirects if the user has not signed up
        redirect_to "/users/sign_up"  unless user_signed_in?

        # if this user already has stats it will update
        if !Statistic.where(user_id: current_user.id).empty?

          update(statistic_params)
          return
        end

        @statistic = Statistic.new(statistic_params)
        if @statistic.save
          respond_to do |format|
            format.json { render :json => @statistic }
          end
        end
      end

      def update(statistics)
        @statistic = Statistic.find_by(user_id: current_user.id)

        @statistic.seconds_meditated += statistics[:seconds_meditated]
        @statistic.save
        render :json => @statistic

      end

      def destroy
        respond_with Statistic.destroy(params[:id])
      end

    private
      def statistic_params
        params.require(:statistic).permit(:user_id, :seconds_meditated)
      end
    end
  end
end