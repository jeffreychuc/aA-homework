class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play

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
