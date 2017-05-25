class CreateFlashcards < ActiveRecord::Migration[5.1]
  def change
    create_table :flashcards do |t|
      t.string :subject
      t.string :question
      t.string :answer

      t.timestamps
    end
  end
end
