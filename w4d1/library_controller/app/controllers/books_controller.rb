class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    # your code here
    render :new
  end

  def create
    # your code here
    Book.create!(book_params)
    redirect_to books_url
  end

  def destroy
    Book.find(params[:id]).delete
    redirect_to books_url
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
