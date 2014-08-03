class HomeworksController < ApplicationController
  def index
    @homework = Homework.all
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
    @homework = Homework.find params[:id]
  end
end
