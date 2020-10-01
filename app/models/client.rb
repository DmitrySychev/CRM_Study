class Client < ApplicationRecord
    has_many :user_clients
    has_many :users, through: :user_clients
    has_many :tasks, :dependent => :delete_all
    has_many :users, through: :tasks
    has_many :client_new_inventories
    has_many :new_inventories, through: :client_new_inventories
    has_many :communications, :dependent => :delete_all
    has_many :messages, :dependent => :delete_all

end
