class Meisseli < Sinatra::Base

	set :root, File.expand_path('.')

	# These serve pages

	get '/' do
		#servaa index.html
		haml :index, :layout => :layout, :locals => {:name => "Username"}
	end

	get '/signup' do
		haml :signup, :layout => :layout
	end

	get '/view/:url' do |url|
		haml :edit, :layout => :layout
	end

	get '/edit/:url' do |url|
		if session[:user_id] == User.getByUrl(url).user_id
			haml :edit, :layout => :layout
		else
			redirect "/view/"+url
		end
	end

	get '/templates/*.*' do |template, ext|
		file = 'templates/' + template
		begin
			haml file.to_sym, :layout => :empty
		rescue Exception => e
			404
		end
	end

	get '/:name' do |name|
		haml :user, :layout => :layout, :locals => {:name => name}
	end

	# These serve json == REST API

	get '/pageservices/:page_id' do |page_id|
		PageService.getByPageId(page_id).to_json()
	end

	get '/services/:service_id' do |service_id|
		Service.where(:service_id => service_id).to_json()
	end

	get '/page/:url' do |url|
		Page.where(:url => url).first.to_json()
	end
end