class Stack
  def initialize
    # create ivar to store stack here!
    @stack = []
  end

  def add(el)
    # adds an element to the stack
    @stack.push(el)
    el
  end

  def remove
    # removes one element from the stack
    @stack.pop
  end

  def show
    # return a copy of the stack
    @stack.dup
  end
end

class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.unshift(el)
    el
  end

  def dequeue
    @queue.pop
  end

  def show
  @queue.dup
  end
end

class Map
  def initialize
    @map = Array.new { Array.new }
  end

  def assign(key, value)
    if @map.any? { |k, v| k == key  }
      @map.each do |element|
        if element[0] == key
          element[1] = value
        end
      end
    else
      @map.push([key, value])
    end
    nil
  end

  def lookup(key)
    @map.each do |k, v|
      if k == key
        return v
      end
    end
    nil
  end

  def remove(key)
    @map.each_with_index do |element, i|
      if element[0] == key
        @map.delete_at(i)
      end
    end
  end

  def show
    deep_dup(@map)
  end

  private
  def deep_dup(arr)
    fin_arr = []
    arr.each do |el|
      if el.is_a?(Array)
        fin_arr.push(el.dup)
      else
        fin_arr.push(el)
      end
    end
    fin_arr
  end
end
