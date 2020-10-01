# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_25_144522) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "action_mailbox_inbound_emails", force: :cascade do |t|
    t.integer "status", default: 0, null: false
    t.string "message_id", null: false
    t.string "message_checksum", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["message_id", "message_checksum"], name: "index_action_mailbox_inbound_emails_uniqueness", unique: true
  end

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "client_new_inventories", force: :cascade do |t|
    t.bigint "new_inventory_id"
    t.bigint "client_id"
    t.index ["client_id"], name: "index_client_new_inventories_on_client_id"
    t.index ["new_inventory_id"], name: "index_client_new_inventories_on_new_inventory_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "title"
    t.string "first_name"
    t.string "last_name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "email"
    t.string "phone1"
    t.string "phone2"
    t.string "vehicle_now"
    t.string "vehicle_past"
    t.string "vehicle_interest"
    t.string "source"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "communications", force: :cascade do |t|
    t.integer "client_id"
    t.string "content"
    t.string "category"
    t.string "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "emails", force: :cascade do |t|
    t.text "subject"
    t.text "body"
    t.text "address"
    t.integer "user_id"
    t.integer "client_id"
    t.integer "to"
    t.integer "from"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "messages", force: :cascade do |t|
    t.text "body"
    t.integer "user_id"
    t.integer "client_id"
    t.integer "to"
    t.integer "from"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "new_inventories", force: :cascade do |t|
    t.string "year"
    t.string "make_model"
    t.string "vin"
    t.string "car_type"
    t.integer "price"
    t.string "mileage"
    t.string "status"
    t.string "color"
    t.string "drive_type"
    t.string "engine"
    t.string "stand_spec"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "content"
    t.string "date_due"
    t.integer "user_id"
    t.integer "client_id"
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "category"
  end

  create_table "user_clients", force: :cascade do |t|
    t.integer "user_id"
    t.integer "client_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
