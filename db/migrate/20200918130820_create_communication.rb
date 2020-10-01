class CreateCommunication < ActiveRecord::Migration[6.0]
  def change
    create_table :communications do |t|
      t.integer :client_id
      t.string :content
      t.string :category
      t.string :date

      t.timestamps
    end
  end
end
