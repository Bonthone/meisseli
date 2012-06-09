class Meisseli < Sinatra::Base

	# Get DB settings depending on environment
	env = ENV["RACK_ENV"]

	YAML::load(File.open('config/database.yml'))[env].symbolize_keys.each do |key, value|
	  set key, value
	end

	ActiveRecord::Base.establish_connection(	
		:adapter => "mysql2", 
		:host => Meisseli.settings.db_host,
		:database => Meisseli.settings.db_name,
		:username => Meisseli.settings.db_username,
		:password => Meisseli.settings.db_password
	)

	class User < ActiveRecord::Base
	end

	class Page < ActiveRecord::Base
	end

	class PageService < ActiveRecord::Base
	end

	class Service < ActiveRecord::Base
 	end

end