class EmailSerializer < ActiveModel::Serializer
    attributes :id, :body, :to, :from, :created_at, :subject, :address

    # def address
    #   object.email
    # end

    # def id
    #   object.uid
    # end

    has_one :user
    has_one :client
  end