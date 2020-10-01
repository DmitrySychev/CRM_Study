class CreateClientNewInventory < ActiveRecord::Migration[6.0]
  def change
    create_table :client_new_inventories do |t|
      t.belongs_to :new_inventory
      t.belongs_to :client
    end
  end
end
