class EmailsController < ApplicationController
    skip_before_action :authorized
    # skip_before_action :verify_authenticity_token
    before_action :set_email, only: [:show, :update, :destroy]
  
    # GET /email
    def index
      # gmail = Gmail.connect(Rails.application.credentials.mail[:email], Rails.application.credentials.mail[:password])
      # # gmail = Gmail.connect(:xoauth2, "crm.study.project@gmail.com", "TOKEN")  
      # # @emails = {}
      # newArr = []
      # @emails = gmail.inbox.emails.each do |email| 
      #   # byebug
      #   @messages = {}
      #   @messages[:body] = email.message.body.raw_source
      #   @messages[:subject] = email.message.subject
      #   @messages[:date] = email.message.date
      #   @messages[:id] = email.uid
      #   @messages[:from] = email.message.from 
      #   @messages[:to] = email.message.to 
      #   newArr.push(@messages)
      # end
      # gmail.inbox.read.last.message.body.raw_source // body of email
      # gmail.inbox.read.last.uid // id of email
      # gmail.inbox.read.last.message.to // to
      # gmail.inbox.read.last.message.from // from
      # byebug
      # render :json => newArr.to_json
      @emails = Email.all
      render json: @emails
    end
  
    # GET /email/1
    def show
      render json: @email
    end
  
    # POST /emails
    def create
      @@email = Email.new(email_params)
      gmail = Gmail.connect(Rails.application.credentials.mail[:email], Rails.application.credentials.mail[:password])

    #   TwilioClient.new(@email).call
        email = gmail.compose do
            # byebug
            to "crm.study.project@gmail.com"
            subject @@email.subject
            body @@email.body
        end

    email.deliver!

      render json: { email: @email }
 
    end
  
  
    # PATCH/PUT /email/1
    def update
      if @email.update(email_params)
        render json: @email
      else
        render json: @email.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /email/1
    def destroy
      @email.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_email
        @email = Email.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def email_params
        # byebug
        params.require(:email).permit(:subject, :body, :user_id, :client_id, :to, :from, :address)
      end
  end
  

