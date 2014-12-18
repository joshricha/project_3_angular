class StatisticsController < ApplicationController

  def show
    Statistic.find_by(user_id: params[:id])
  end

end