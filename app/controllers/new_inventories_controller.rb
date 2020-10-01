class NewInventoriesController < ApplicationController
    skip_before_action :authorized
    
  
    def index
      @new_inventories = NewInventory.paginate(page: params[:page])
      render json: { 
        new_inventories: @new_inventories,
        page: @new_inventories.current_page,
        pages: @new_inventories.total_pages
       }
    end
  
  # def create
  #     event = current_user.events.create(event_params)
  #     UserEvent.create(user_id: current_user.id, event_id: event.id)
  #     render json: { event: EventSerializer.new(@event) }, status: :created
  # end
  
  def show
    new_inventory = NewInventory.find(params[:id])
    render json: { new_inventory: new_inventory }
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
  
  # private
  
  # def event_params
  #     params.require(:event).permit(:title, :description, :date, :category, :thumbnail, :user_id)
  # end
  
    end