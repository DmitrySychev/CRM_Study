class NewInventory < ApplicationRecord
    has_many :client_new_inventories
    has_many :clients, through: :client_new_inventories


    self.per_page = 24
end