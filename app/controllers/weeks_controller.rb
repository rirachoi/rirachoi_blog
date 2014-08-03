class WeeksController < ApplicationController
  def index
    @weeks = Week.all
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
    @week = Week.find params[:id]
  end
end
