class UserControllerController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages
    end

  end

  def new
    @user = User.new
  end

  private
  def user_params
    # params hash requires a user, the user to have a username and password
    params.require(:user).permit(:username, :password)
  end
end
