class Meisseli < Sinatra::Base

  set :sessions => true

  register do
    def auth (type)
      condition do
        redirect "/login" unless send("is_#{type}?")
      end
    end
  end

  helpers do
    def is_user?
        @user != nil
    end
  end

  before do
    @user = User.get(session[:user_id])
  end

  get "/protected", :auth => :user do
    "Hello, #{@user.id}."
  end

  get "/login" do
    session[:user_id] = User.authenticate(params).id #THIS HAS TO BE A LOT MORE COMPLICATED
    redirect '/protected'
  end

  get "/logout" do
    session[:user_id] = nil
  end

end