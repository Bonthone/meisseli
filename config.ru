require 'rubygems'
require 'bundler'

Bundler.require(:default, :development)

require './server/db/db.rb'
require './server/server.rb'
run Meisseli