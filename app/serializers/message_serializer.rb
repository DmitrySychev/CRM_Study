class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :to, :from, :created_at
  has_one :user
  has_one :client
end
