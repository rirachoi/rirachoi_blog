class CreateHomeworks < ActiveRecord::Migration
  def change
    create_table :homeworks do |t|
      t.string :title
      t.string :date
      t.string :program
      t.text :description
      t.string :image
      t.string :image_description, array: true, default: []
      t.integer :day_id
      t.integer :week_id
      t.timestamps
    end
  end
end
