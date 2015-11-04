# Homepage (Root path)
require 'json'

get '/' do
  erb :app
end

get '/routes' do
  @all_routes = Route.all
  @all_routes.to_json
end
