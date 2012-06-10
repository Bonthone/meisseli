class Meisseli < Sinatra::Base

  set :sessions => true

  get "/login" do
    user = User.authenticate(params)
    if user
      success = "1"
      page = user.url
      session[:user_id] = user.user_id #THIS HAS TO BE A LOT MORE COMPLICATED
      session[:user_name] = Page.getByUserId(session[:user_id]).page_name;
    else
      success = "0"
      page = ""
    end
    content_type :json
    {:success => success, :redirect => "/edit/#{page}"}.to_json()
  end

  get "/logout" do
    session[:user_id] = nil
    session[:user_name] = nil
    redirect '/'
  end

  get "/register" do
    user = User.new({:url => params[:url], :password => params[:password]});
    user.save
    session[:user_id] = user.user_id
    pagename = params[:first]+" "+params[:last]
    page = Page.new({:user_id => user.user_id, :url => user.url, :page_name => pagename})
    page.save
    session[:user_name] = page.page_name
    uri = "/edit/#{user.url}"
    redirect uri  
  end
end