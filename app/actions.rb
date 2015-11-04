# Homepage (Root path)
require 'json'

get '/' do
  erb :app
end

get '/routes' do
  @all_routes = Route.all
  halt 200, {'Content-Type' => 'application/json'}, @all_routes.to_json
end

post '/routes' do
  @new_route = Route.new(
  name: params[:name],
  grade: params[:grade],
  description: params[:description],
  location: params[:location]
  )
  @new_route.save
  halt 200, {'Content-Type' => 'application/json'},@new_route.to_json
end
