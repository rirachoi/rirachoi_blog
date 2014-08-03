class CreateWeeks < ActiveRecord::Migration
  def change
    create_table :weeks do |t|
      t.string :name
      t.string :study, array: true, default: []
      t.timestamps
    end
  end
end
