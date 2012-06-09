class Meisseli < Sinatra::Base

  set :sessions => true

  get "/login" do
    session[:user_id] = User.authenticate(params).user_id #THIS HAS TO BE A LOT MORE COMPLICATED
    "Login as #{session[:user_id]}"
  end

  get "/logout" do
    session[:user_id] = nil
  end

  get "/register" do
    user = User.new(params);
    user.save
    session[:user_id] = user.user_id
    uri = "/edit/#{user.url}"
    redirect uri  
  end

end