class Meisseli < Sinatra::Base

	# These serve pages

	get '/' do
		"Hello world, it's #{Time.now} at the server!" + 
		(session[:user_id] == nil ? "You're anonymous" : "You're logged in as #{User.get(session[:user_id]).user_id}")
	end

	get '/view/:url' do
		User.find(:first).to_json()
	end

	get '/edit/:url' do |url|
		User.find(:all, :conditions => {:url => url}, 
			:select => "user_id, url").to_json()  
	end

	# These serve json
	get '/pageservices/:page_id' do |page_id|
		PageService.find(:page_id => page_id, 
			:select => "service_id, user_name_in_service").to_json()
	end

	get '/services/:service_id' do |service_id|
		Service.where(:service_id => service_id).to_json()
	end

	get '/page/:page_id' do |page_id|
		Page.where(:page_id => page_id).to_json()
	end
end