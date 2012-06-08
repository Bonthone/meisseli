source 'http://rubygems.org'
gem 'sinatra', :require => 'sinatra/base'
gem 'data_mapper'

group :development, :test do 
	gem 'sqlite3'
end

group :production do
	gem 'pg', '0.10.0' # this gem is required to use postgresql in heroku
end