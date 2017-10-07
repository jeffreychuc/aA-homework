class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    @sequence_length += 1
    if !@game_over
      round_success_message
    end
  end

  def show_sequence
    add_random_color
    # commented out below lines for rspec testing
    # puts @seq.to_s
    # sleep(1)
    # system("clear")
  end

  def require_sequence

  end

  def add_random_color
    @seq.push(COLORS[rand(0..3)])
  end

  def round_success_message

  end

  def game_over_message

  end

  def reset_game

  end
end

if __FILE__ == $PROGRAM_NAME
  game = Simon.new
  game.play
end
