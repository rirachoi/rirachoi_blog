class DaysController < ApplicationController
  def index
    @days = Day.all
      respond_to do |format|
        format.html {}
        format.json{ render :json => @flights }
      end
  end

  def new
  end

  def edit
  end

  def show
    @day = Day.find params[:id]
  end
end
