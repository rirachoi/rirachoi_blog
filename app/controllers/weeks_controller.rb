class WeeksController < ApplicationController
  def index
    @weeks = Week.all
      respond_to do |format|
        format.html {}
        format.js{ render :json => @weeks }
        format.json{ render :json => @weeks }
      end
  end
end
