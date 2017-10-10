class Board
  attr_accessor :cups
  SIZE = 14
  def initialize(name1, name2)
    @cups = make_cups
    @names = {name1 => 13, name2 => 6}
  end

  def make_cups
    cups = Array.new
    SIZE.times do |i|
      cup = Array.new
      if (0..5).include?(i) || (7..12).include?(i)
        cup += place_stones
      end
      cups.push(cup)
    end
    cups
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    Array.new(4) { :stone }
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if start_pos > 14 || start_pos <= 0 || start_pos == 6 || start_pos == 13
    true
  end

  def make_move(start_pos, current_player_name)
    # if valid_move?(start_pos)
      hand = @cups[start_pos]
      @cups[start_pos] = Array.new
    # end
    curr_pos = start_pos + 1
    until hand.empty?
      # p [curr_pos, @names[current_player_name], current_player_name]
      @cups[curr_pos].push(hand.pop) unless curr_pos == @names[current_player_name]
      curr_pos += 1
      curr_pos %= 13
    end
    render
    next_turn(curr_pos)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return @cups[0..5].all?{ |i| i.empty?} || @cups[7..12].all?{ |i| i.empty?}
  end

  def winner
    if one_side_empty?

  end
end

