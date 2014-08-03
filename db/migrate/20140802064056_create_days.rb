class CreateDays < ActiveRecord::Migration
  def change
    create_table :days do |t|
      t.string :name
      t.string :today_i_learnt, array: true, default: []
      t.string :images
      t.integer :week_id
      t.timestamps
    end
  end
end
