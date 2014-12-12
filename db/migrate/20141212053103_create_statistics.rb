class CreateStatistics < ActiveRecord::Migration
  def change
    create_table :statistics do |t|
      t.integer :user_id
      t.integer :times_meditated
      t.integer :seconds_meditated
      t.date :first_date_meditated
      t.date :last_date_meditated

      t.timestamps
    end
  end
end
