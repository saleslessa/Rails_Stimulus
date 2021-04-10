class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :name
      t.datetime :until
      t.boolean :deleted

      t.timestamps
    end
  end
end
