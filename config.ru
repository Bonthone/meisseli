require 'rubygems'
require 'bundler'

Bundler.require(:default, :development)

require './server/db/db.rb'
require './server/auth/authenticate.rb'
require './server/server.rb'
run Meisseli