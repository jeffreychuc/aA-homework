class LRUCache
  def initialize(size)
    @lru = Array.new(size)
    @max_size = size
  end

  def count
    # returns number of elements currently in cache
    @lru.length
  end

  def add(el)
    # adds element to cache according to LRU principle

    # LRU principle
    # most recent item first, if item is in array then move to back
    if @lru.include?(el)
      @lru.delete(el)
    elsif count == @max_size
      @lru.shift
    end
    @lru.push(el)
  end

  def show
    # shows the items in the cache, with the LRU item first
    @lru.dup
  end

  private
  # helper methods go here!

end

