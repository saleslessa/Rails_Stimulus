# frozen_string_literal: true
class HomeController < ApplicationController
  def index; end

  def get_something
    render json: { message: 0.days.ago }, status: 200, layout: false
  end
end
