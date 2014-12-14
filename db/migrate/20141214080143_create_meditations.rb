class CreateMeditations < ActiveRecord::Migration
  def change
    create_table :meditations do |t|
      t.string :name
      t.string :meditation_type
      t.integer :length
      t.string :url

      t.timestamps
    end
  end
end
