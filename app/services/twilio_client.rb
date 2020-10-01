class TwilioClient
    attr_reader :message

def initialize(message)
    @message = message
end


    def call
        client = Twilio::REST::Client.new
        client.messages.create({
            from: Rails.application.credentials.twilio[:phone_number],
            to: Rails.application.credentials.twilio[:phone_number],
            body: message.body
        })
    end

end