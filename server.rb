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

	# Get DB settings depending on environment
	env = ENV["RACK_ENV"]

	YAML::load(File.open('config/database.yml'))[env].symbolize_keys.each do |key, value|
	  set key, value
	end

	class MyAPI < ActiveRecord::Base
		class << self

			# Connect to database
			ActiveRecord::Base.establish_connection(
			{
			  :adapter => "mysql2", 
			  :host => Meisseli.settings.db_host,
			  :database => Meisseli.settings.db_name,
			  :username => Meisseli.settings.db_username,
			  :password => Meisseli.settings.db_password
			})

			def get_users()
				query = 'select * from tblUser';
				self.connection.select_all(query).to_json
			end

			def get_services_by_url(user_url)
				url = ActiveRecord::Base.connection.quote(user_url)
				p user_url
				p url

				query = 'SELECT relation.palvelu_id, palv.nimi AS palvelu_nimi, palv.url AS palv_url, relation.user_name_palvelussa
					FROM tblSivujen_Palvelut relation
					INNER JOIN tblSivu sivu
					ON sivu.url = #{url} AND sivu.id = relation.user_id 
					INNER JOIN tblPalvelu palv
					ON palv.id = relation.palvelu_id'
				self.connection.select_all(query).to_json
			end

		end
	end

end