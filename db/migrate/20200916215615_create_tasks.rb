class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :content
      t.string :date_due
      t.integer :user_id
      t.integer :client_id
      t.string :status


      t.timestamps
    end
  end
end
