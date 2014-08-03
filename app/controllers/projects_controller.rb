class ProjectsController < ApplicationController
  def index
    @projects = Project.all
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
    @Project = Project.find params[:id]
  end
end
