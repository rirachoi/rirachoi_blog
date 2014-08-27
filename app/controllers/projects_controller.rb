class ProjectsController < ApplicationController
  def index
    @projects = Project.all
      respond_to do |format|
        format.html {}
        format.json{ render :json => @projects }
      end
  end

  def show
    @projects = Project.all
    @project = Project.find params[:id]
    respond_to do |format|
      format.html {}
      format.js{ render :json => @project }
      format.json{ render :json => @project }
    end
  end
end
