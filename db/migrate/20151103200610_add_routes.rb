class AddRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.string :name
      t.string :grade
      t.string :description
      t.string :location
    end
  end
end
