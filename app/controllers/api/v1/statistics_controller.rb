module Api
  module V1
    class StatisticsController < ApplicaitonController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        respond_with(Statistic.all)
      end

      def show
        respond_with(Statistic.find(params[:id]))
      end

      def create
        @statistic = Statistic.new(statistic_params)
        if @statistic.save
          respond_to do |format|
            format.json { render :json => @statistic }
          end
        end
      end

      def update
        @statistic = Statistic.find(params[:id])
        if @statistic.update(todo_params)
          respond_to do |format|
            format.json { render :json => @statistic }
          end
        end
      end

      def destroy
        respond_with Statistic.destroy(params[:id])
      end

    private
      def statistic_params
        # need to add more permits
        params.require(:statistic).permit(:user_id)
      end
    end
  end
end