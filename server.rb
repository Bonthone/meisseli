require './db.rb'
class Meisseli < Sinatra::Base

	get '/' do
		"Hello world, it's #{Time.now} at the server!"
	end

	get '/view/:url' do
		User.find(:first).to_json()
	end

	get '/edit/:url' do |url|
		User.where(:url => url).first.to_json()  
	end
end