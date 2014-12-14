module Api
  module V1
    class MeditationsController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        respond_with(Meditation.all)
      end

      def show
        respond_with(Meditation.find(params[:id]))
      end

      def create
        @meditation = Meditation.new(statistic_params)
        if @meditation.save
          respond_to do |format|
            format.json { render :json => @meditation }
          end
        end
      end

      def update
        @meditation = Meditation.find(params[:id])
        if @meditation.update(todo_params)
          respond_to do |format|
            format.json { render :json => @meditation }
          end
        end
      end

      def destroy
        respond_with Meditation.destroy(params[:id])
      end

    private
      def statistic_params
        # need to add more permits
        params.require(:meditation).permit(:user_id)
      end
    end
  end
end