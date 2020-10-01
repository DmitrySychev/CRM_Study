class CreateUserClients < ActiveRecord::Migration[6.0]
  def change
    create_table :user_clients do |t|
      t.integer :user_id
      t.integer :client_id

      t.timestamps
    end
  end
end
