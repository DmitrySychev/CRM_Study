class CommunicationsController < ApplicationController
    skip_before_action :authorized
    
  
    def index
      @communications = Communication.all
      render json: 
        {communications: @communications}
    end
  
  # def create
  #     event = current_user.events.create(event_params)
  #     UserEvent.create(user_id: current_user.id, event_id: event.id)
  #     render json: { event: EventSerializer.new(@event) }, status: :created
  # end
  
  def show
    communication = Communication.find(params[:id])
    render json: { communication: communication }
  end
  
  # def my_events 
  #   joined_events = current_user.joined_events
  #   created_events = current_user.events
  #   render json: { created_events: created_events, joined_events: joined_events}
  #   # needs to have the id from the user_events table to make the connection for the front to be able to no longer attend
  # end
  
  # def destroy
  #   @event = Event.find(params[:id])
  #   @event.destroy
  # end
  
  private

  def communication_params
      params.require(:communication).permit(:content, :date, :client_id)
  end
  

end