class WeeksController < ApplicationController
  def index
    @weeks = Week.all
      respond_to do |format|
        format.html {}
        format.js{ render :json => @weeks }
        format.json{ render :json => @weeks }
      end
  end

  def new
  end

  def edit
  end

  def show
    @week = Week.find params[:id]
      respond_to do |format|
        format.html {}
        format.js{ render :json => @week }
        format.json{ render :json => @week }
      end
  end
end
