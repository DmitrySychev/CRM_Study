class User < ApplicationRecord
    has_many :user_clients
    has_many :clients, through: :user_clients
    has_many :tasks
    has_many :messages

    has_secure_password

    validates :username, uniqueness: { case_sensitive: false }

end
