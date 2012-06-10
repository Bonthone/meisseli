class Meisseli < Sinatra::Base

	# Get DB settings depending on environment
	# Use DATABASE_URL if available, otherwise look for config/database.yml
	if(ENV["DATABASE_URL"])
		ActiveRecord::Base.establish_connection(:adapter => "mysql2")
	else
		YAML::load(File.open('config/database.yml'))[ENV["RACK_ENV"]].symbolize_keys.each do |key, value|
		  set key, value
		end

		ActiveRecord::Base.establish_connection(	
			:adapter => "mysql2", 
			:host => Meisseli.settings.db_host,
			:database => Meisseli.settings.db_name,
			:username => Meisseli.settings.db_username,
			:password => Meisseli.settings.db_password
		)
	end

	class User < ActiveRecord::Base
		def self.get(id)
			where(:user_id => id).first
		end
		def self.getByUrl(url)
			where(:url => url).first
		end
		def self.authenticate(params)
			where(:url => params[:url], :password => params[:password]).first
		end
	end

	class Page < ActiveRecord::Base
		def self.getByUserId(id)
			where(:user_id => id).first
		end
		def self.getByPageId(id)
			where(:page_id => id).first
		end
	end

	class PageService < ActiveRecord::Base
	end

	class Service < ActiveRecord::Base
 	end

end