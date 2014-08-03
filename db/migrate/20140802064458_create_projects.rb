class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title
      t.string :date
      t.string :program
      t.text :description
      t.string :main_image
      t.text :images, array: true, default: []
      t.text :image_description, array: true, default: []
      t.integer :day_id
      t.integer :week_id
      t.timestamps
    end
  end
end
