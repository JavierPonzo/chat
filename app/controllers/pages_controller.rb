class PagesController < ApplicationController
  before_action :authenticate_user!

  def home
    @messages = Message.last(5)
    @mesage = current_user.messages.build
  end
end
