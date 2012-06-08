class Meisseli < Sinatra::Base

	# Setting up the database
	DataMapper.setup(:default, ENV['DATABASE_URL'] || "sqlite3://#{Dir.pwd}/mydatabase.db")

	get '/' do
		return 'Hello World!'
	end
end