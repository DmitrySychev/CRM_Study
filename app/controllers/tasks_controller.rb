class TasksController < ApplicationController
    skip_before_action :authorized
    
  
    def index
      @all_tasks = Task.all.select { |task| task.content != 'Appointment' }
      @tasks = @all_tasks.paginate(page: params[:page], per_page: 12)
      @appointments = Task.all
      render json: { 
        tasks: @tasks,
        page: @tasks.current_page,
        pages: @tasks.total_pages}
    end

    def tasks_all
      tasks_all = Task.all.select { |task| task.content != 'Appointment' }
      render json: { tasks: tasks_all }
    end

    def appointments 
      @appointments = Task.all.select { |task| task.content = 'Appointment' }
      render json: { appointments: @appointments }
    end

    def appointments_dash
      @appointments_dash = Task.all.select { |task| task.content = 'Appointment' }
      @sorted_appts = @appointments_dash.sort_by(&:date_due )
      @appointments = @sorted_appts.paginate(page: params[:page], per_page: 12)
      render json: { 
        appointments: @appointments,
        page: @appointments.current_page,
        pages: @appointments.total_pages} 
    end

    def tasks_dash
      @tasks_dash = Task.all.select { |task| task.content != 'Appointment' }
      @sorted_tasks = @tasks_dash.sort_by(&:date_due )
      @tasks = @sorted_tasks.paginate(page: params[:page], per_page: 12)
      render json: { 
        appointments: @tasks,
        page: @tasks.current_page,
        pages: @tasks.total_pages} 
    end
  
  # def create
  #     event = current_user.events.create(event_params)
  #     UserEvent.create(user_id: current_user.id, event_id: event.id)
  #     render json: { event: EventSerializer.new(@event) }, status: :created
  # end
  
  def show
    task = Task.find(params[:id])
    render json: { task: task }
  end
  
  # def destroy
  #   @event = Event.find(params[:id])
  #   @event.destroy
  # end
  
  private

  def task_params
      params.require(:task).permit(:content, :date_due, :user_id, :client_id, :category)
  end
  

end


