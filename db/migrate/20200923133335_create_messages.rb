class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.text :body
      t.integer :user_id
      t.integer :client_id
      t.integer :to
      t.integer :from

      t.timestamps
    end
  end
end
