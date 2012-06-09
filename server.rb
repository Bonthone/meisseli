class Meisseli < Sinatra::Base

	class MyAPI < ActiveRecord::Base
		class << self

			def get_users()
				query='select * from tblUser';
				self.connection.select_all(query).to_json
			end

		end
	end

	# Setting up the database
	dbconfig = {}

	configure :development do
		dbconfig = {
			:adapter => "mysql2",
			:host => "localhost",
			:username => "dibs",
			:password => "peruna",
			:database => "dibs"
		}
	end

	configure :production do
		dbconfig = {
			:adapter => "mysql2",
			:host => "us-cdbr-east.cleardb.com",
			:username => "ad56145265828d",
			:password => "8b97f200",
			:database => "heroku_f3199d24cd86b48"
		}
	end

	# Connect to database
	MyAPI.establish_connection(dbconfig)


	get '/' do
		"Hello world, it's #{Time.now} at the server!"
	end

	get '/users/' do
		MyAPI.get_users()
	end

end