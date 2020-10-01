class CreateEmails < ActiveRecord::Migration[6.0]
  def change
    create_table :emails do |t|
      t.text :subject
      t.text :body
      t.text :address
      t.integer :user_id
      t.integer :client_id
      t.integer :to
      t.integer :from

      t.timestamps
    end
  end
end
