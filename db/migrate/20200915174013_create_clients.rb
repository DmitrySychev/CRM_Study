class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.string :title
      t.string :first_name
      t.string :last_name
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :email
      t.string :phone1
      t.string :phone2
      t.string :vehicle_now
      t.string :vehicle_past
      t.string :vehicle_interest
      t.string :source

      t.timestamps
    end
  end
end
