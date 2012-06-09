class Meisseli < Sinatra::Base

	set :root, File.expand_path(Dir.pwd)

	# These serve pages

	get '/' do
		send_file File.expand_path('index.html', settings.public_folder)
	end

	get '/view/:url' do
		User.find(:first).to_json()
	end

	get '/edit/:url' do |url|
		User.find(:all, :conditions => {:url => url}, 
			:select => "id, url").to_json()  
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

	get '/:name' do |name|
		haml :user, :layout => :layout, :locals => {:name => name}
	end
end