# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

User.destroy_all
Client.destroy_all
UserClient.destroy_all
Task.destroy_all
NewInventory.destroy_all
ClientNewInventory.destroy_all
Communication.destroy_all
Message.destroy_all





User.create(username: "Jim", password_digest: Faker::Internet.password)
User.create(username: "Bill", password_digest: Faker::Internet.password)
User.create(username: "James", password_digest: Faker::Internet.password)
User.create(username: "Ann", password_digest: Faker::Internet.password)
User.create(username: "Frank", password_digest: Faker::Internet.password)
User.create(username: "Danira", password_digest: Faker::Internet.password)
User.create(username: "Tina", password_digest: Faker::Internet.password)
User.create(username: "Mike", password_digest: Faker::Internet.password)

inv_options = ['inventory', 'incoming', 'sold']

50.times do
    NewInventory.create(
        year: Faker::Vehicle.year, 
        make_model: Faker::Vehicle.make_and_model,
        car_type: Faker::Vehicle.car_type,
        price: rand(16000...75000),
        vin: Faker::Vehicle.vin,
        mileage: Faker::Vehicle.mileage,
        status: inv_options.sample, 
        color: Faker::Vehicle.color,
        drive_type: Faker::Vehicle.drive_type,
        engine: Faker::Vehicle.engine,
        stand_spec: Faker::Vehicle.standard_specs
        )
end

source_options = ['website', 'cars.com', 'manucfacturer website', 'service', 'walk in', 'repeat client']

50.times do
    title = [Faker::Name.first_name, Faker::Name.last_name]
    Client.create!(
        first_name: title[0], 
        last_name: title[1], 
        title: title.join(' '),
        address: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state_abbr,
        zip: Faker::Address.zip,
        email: Faker::Internet.email,
        phone1: Faker::PhoneNumber.cell_phone,
        phone2: Faker::PhoneNumber.cell_phone,
        vehicle_now: Faker::Vehicle.make_and_model,
        vehicle_past: Faker::Vehicle.make_and_model,
        vehicle_interest: NewInventory.all.sample.id,
        source: source_options.sample
        )
end

1.times do 
    title = ['Dmitry', Faker::Name.last_name]
    Client.create!(
        title: title.join(' '),
        first_name: title[0], 
        last_name: title[1], 
        address: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state_abbr,
        zip: Faker::Address.zip,
        email: Faker::Internet.email,
        phone1: "+19177558800",
        phone2: Faker::PhoneNumber.cell_phone,
        vehicle_now: Faker::Vehicle.make_and_model,
        vehicle_past: Faker::Vehicle.make_and_model,
        source: 'website'
        )
end


20.times do
    UserClient.create(user_id: User.all.sample.id, client_id: Client.all.sample.id)
end

task_options = ['open', 'complete']
task_content_options = ['6 Month Follow Up Call', '3 Month Follow Up Call', '1 Month Follow Up Call', '24 Hour Follow Up Call', '2 Week Follow Up Call', 'Appointment']

400.times do
    date = rand(1..31)
    month = rand(8..10)
    Task.create(date_due: "#{month}/#{date}/2020", content: task_content_options.sample, user_id: User.all.sample.id, client_id: Client.all.sample.id, status: task_options.sample)
end




20.times do
    ClientNewInventory.create(new_inventory_id: NewInventory.all.sample.id, client_id: Client.all.sample.id)
end

options = ['Phone Call', 'Email', 'Meeting', 'Chat', 'SMS']

300.times do
    Communication.create(client_id: Client.all.sample.id, category: options.sample, content: Faker::TvShows::VentureBros.quote, date: Faker::Date)
end

300.times do
    @user = User.all.sample.id
    @client = Client.all.sample.id
    options = [@user, @client]
    Message.create(body: Faker::TvShows::VentureBros.quote, user_id: @user, client_id: @client, to: options.sample, from: options.sample, )
end

