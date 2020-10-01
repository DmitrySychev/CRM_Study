class CreateNewInventory < ActiveRecord::Migration[6.0]
  def change
    create_table :new_inventories do |t|
      t.string :year
      t.string :make_model
      t.string :vin
      t.string :car_type
      t.integer :price
      t.string :mileage
      t.string :status
      t.string :color
      t.string :drive_type
      t.string :engine
      t.string :stand_spec
 
    end
  end
end
