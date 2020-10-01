class ClientNewInventory < ApplicationRecord
    belongs_to :new_inventory
    belongs_to :client
end