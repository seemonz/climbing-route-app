class SeedRoutes < ActiveRecord::Migration
  def change
    Route.create name: "Mirage", grade: "5.12c", description: "Next route to the right on the gorgeous overhanging orange face. First 5 bolts are thin and very continuous. Obvious crux at the second bolt. It's a very very nice line...", location: "Red River Gorge, KY"
    
  end
end
