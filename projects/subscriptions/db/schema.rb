# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 4) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string   "name"
    t.string   "full_domain"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "rails_admin_histories", force: :cascade do |t|
    t.text     "message"
    t.string   "username"
    t.integer  "item"
    t.string   "table"
    t.integer  "month",      limit: 2
    t.bigint   "year"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.index ["item", "table", "month", "year"], name: "index_rails_admin_histories", using: :btree
  end

  create_table "saas_admins", force: :cascade do |t|
    t.string   "email",                              default: "", null: false
    t.string   "encrypted_password",     limit: 128, default: "", null: false
    t.string   "password_salt",                      default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                      default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "subscription_affiliates", force: :cascade do |t|
    t.string   "name"
    t.decimal  "rate",       precision: 6, scale: 4, default: "0.0"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "token"
    t.index ["token"], name: "index_subscription_affiliates_on_token", using: :btree
  end

  create_table "subscription_discounts", force: :cascade do |t|
    t.string   "name"
    t.string   "code"
    t.decimal  "amount",                 precision: 6, scale: 2, default: "0.0"
    t.boolean  "percent"
    t.date     "start_on"
    t.date     "end_on"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "apply_to_setup",                                 default: true
    t.boolean  "apply_to_recurring",                             default: true
    t.integer  "trial_period_extension",                         default: 0
  end

  create_table "subscription_payments", force: :cascade do |t|
    t.integer  "subscription_id"
    t.decimal  "amount",                    precision: 10, scale: 2, default: "0.0"
    t.string   "transaction_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "setup"
    t.boolean  "misc"
    t.integer  "subscription_affiliate_id"
    t.decimal  "affiliate_amount",          precision: 6,  scale: 2, default: "0.0"
    t.integer  "subscriber_id"
    t.string   "subscriber_type"
    t.index ["subscriber_id", "subscriber_type"], name: "index_payments_on_subscriber", using: :btree
    t.index ["subscription_id"], name: "index_subscription_payments_on_subscription_id", using: :btree
  end

  create_table "subscription_plans", force: :cascade do |t|
    t.string   "name"
    t.decimal  "amount",         precision: 10, scale: 2
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "renewal_period",                          default: 1
    t.decimal  "setup_amount",   precision: 10, scale: 2
    t.integer  "trial_period",                            default: 1
    t.string   "trial_interval",                          default: "months"
    t.integer  "user_limit"
  end

  create_table "subscriptions", force: :cascade do |t|
    t.decimal  "amount",                    precision: 10, scale: 2
    t.datetime "next_renewal_at"
    t.string   "card_number"
    t.string   "card_expiration"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "state",                                              default: "trial"
    t.integer  "subscription_plan_id"
    t.integer  "subscriber_id"
    t.string   "subscriber_type"
    t.integer  "renewal_period",                                     default: 1
    t.string   "billing_id"
    t.integer  "subscription_discount_id"
    t.integer  "subscription_affiliate_id"
    t.integer  "user_limit"
    t.index ["subscriber_id", "subscriber_type"], name: "index_subscriptions_on_subscriber", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "name"
    t.boolean  "admin"
    t.integer  "account_id"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["account_id"], name: "index_users_on_account_id", using: :btree
    t.index ["email", "account_id"], name: "index_users_on_email_and_account_id", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
