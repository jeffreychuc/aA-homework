class UserMailer < ApplicationMailer
  default from: 'jchuc@appacademy.io'

  def welcome_email(user)
    # so i can access username later
    @user = user
    mail(to: @user.username, subject: 'Welcome to 99 cats!')
  end
end
