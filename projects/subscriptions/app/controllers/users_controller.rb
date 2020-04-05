class UsersController < ApplicationController

  before_action :authenticate_user!
  before_action :authorized?
  before_action :check_user_limit, :only => :create
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = current_account.users.all
  end

  def new
    logger.info "------------------#{current_account.reached_user_limit?}"
    @user = current_account.users.new
  end

  def create
    @user = current_account.users.build(user_params)
    if @user.save!
      redirect_to users_url
    else
      render 'new'
    end
  end

  def update
    if @user.update!(user_params)
      redirect_to users_url
    else
      render 'edit'
    end
  end

  def destroy
    @user.destroy!
    redirect_to users_url
  end

  protected

    def set_user
      @user ||= current_account.users.find(params[:id])
    end

    def authorized?
      redirect_to new_user_session_url unless (user_signed_in? && self.action_name == 'index') || admin?
    end

    def check_user_limit
      redirect_to new_user_url if current_account.reached_user_limit?
    end

    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation, :remember_me)
    end
end
