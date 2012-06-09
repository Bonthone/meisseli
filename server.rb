require './db.rb'
class Meisseli < Sinatra::Base

	get '/' do
		"Hello world, it's #{Time.now} at the server!"
	end

	get '/users/' do
		MyAPI.get_users()
	end

	get '/user/:name' do
		MyAPI.get_services_by_url( params[:name] )
	end
end