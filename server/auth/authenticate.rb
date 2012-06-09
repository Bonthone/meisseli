class Meisseli < Sinatra::Base

  set :sessions => true

  get "/login" do
    session[:user_id] = User.authenticate(params).id #THIS HAS TO BE A LOT MORE COMPLICATED
    "Login as #{session[:user_id]}"
  end

  get "/logout" do
    session[:user_id] = nil
  end

end