class ClientsController < ApplicationController
  skip_before_action :authorized
  

  def index
    @sorted_clients = Client.all.sort_by(&:id).reverse
    @clients = @sorted_clients.paginate(page: params[:page], per_page: 15)
    @all_clients = Client.all
    render json: { 
      clients: @clients,
      all_clients: @all_clients,
      page: @clients.current_page,
      pages: @clients.total_pages
     }
  end


  
  def client_cont
    @clients = Client.paginate(page: params[:page], per_page: 24)
    render json: { 
      clients: @clients,
      page: @clients.current_page,
      pages: @clients.total_pages
     }
  end

  def last_client
    @client = Client.all.last
    render json: @client 
  end

  def create
      @client = Client.create!(client_params)
  end

  def show
    client = Client.find(params[:id])
    render json: { client: client }
  end

  def update
    # byebug
    @client = Client.find(params[:id])
    @client.update(client_params)
  end

  # def my_events 
  #   joined_events = current_user.joined_events
  #   created_events = current_user.events
  #   render json: { created_events: created_events, joined_events: joined_events}
  #   # needs to have the id from the user_events table to make the connection for the front to be able to no longer attend
  # end

  def destroy
    @client = Client.find(params[:id])
    @client.destroy
  end

  private

  def client_params
      params.require(:client).permit(:first_name, :last_name, :address, :city, :state, :zip, :phone1, :phone2, :vehicle_now, :vehicle_past, :email, :id, :created_at, :updated_at)
  end

end