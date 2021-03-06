class MessagesController < ApplicationController
  skip_before_action :authorized
  # skip_before_action :verify_authenticity_token
  before_action :set_message, only: [:show, :update, :destroy]

  # GET /messages
  def index
    @messages = Message.all.sort_by(&:id)
    render json: @messages
  end

  # GET /messages/1
  def show
    render json: @message
  end

  # POST /messages
  def create
    @message = Message.create(message_params)
    TwilioClient.new(@message).call
    render json: { message: @message }


  end

  # PATCH/PUT /messages/1
  # def update
  #   if @message.update(message_params)
  #     render json: @message
  #   else
  #     render json: @message.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /messages/1
  # def destroy
  #   @message.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def message_params
      # byebug
      params.require(:message).permit(:body, :user_id, :client_id, :to, :from)
    end
end
