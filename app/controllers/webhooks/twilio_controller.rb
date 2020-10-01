class Webhooks::TwilioController < ApplicationController
    skip_before_action :authorized

    def params
        request.parameters
    end

  
    def create 
 
        client = Client.find_by(id: 51)
        body = params[:Body]

        Message.create(client_id: 51, body: body, user_id: '1', to: '1', from: 51)
       
        head :ok
      end



end

