class Api::V1::FlashcardsController < ApplicationController

  def index
    flashcards = Flashcard.all
    render json: flashcards
  end

  def create
    flashcard = Flashcard.create(flashcard_params)
    render json: flashcard
  end

  def destroy
    flashcard = Flashcard.find(params[:id])
    flashcard.destroy
  end

  private

  def flashcard_params
    params.require(:flashcard).permit(:subject, :question, :answer)
  end

end
