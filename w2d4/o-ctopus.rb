FISH = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'].freeze

def slugg_octo(fish_arr)
  sorted = true
  until sorted
    sorted = true
    fish_arr.each_with_index do |f1, i|
      fish_arr.each_with_index do |f2, j|
        if f1.length > f2.length
          fish_arr[i] ,fish_arr[j] = fish_arr[j], fish_arr[i]
          sorted = false
        end
      end
    end
    p "wtf"
  end
  fish_arr.last
end

# longest fish via N^2
p slugg_octo(FISH)

def fish_sort(fish_arr)
  return fish_arr if fish_arr.length <= 1
  mid = fish_arr.length/2
  left = fish_sort(fish_arr[0...mid])
  right = fish_sort(fish_arr[mid..-1])
  merge(left, right)
end

def merge(left, right)
  fin = []
  until left.empty? || right.empty?
    if left.first.length < right.first.length
      fin.push(left.shift)
    else
      fin.push(right.shift)
    end
  end
  fin + left + right
end

#longest fish via n log n
p fish_sort(FISH.dup).last

def clever_octo(fish_arr)
  longest = fish_arr.first
  fish_arr[1..-1].each do |fish|
    longest = fish if fish.length > longest.length
  end
  longest
end

p clever_octo(FISH)

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(dir, tiles_arr)
  tiles_arr.each_with_index do |tile, i|
    return i if dir == tile
  end
  nil
end

p slow_dance("up", tiles_array)
p slow_dance("right-down", tiles_array)


tiles_hash = {"up"=>0, "right-up"=>1, "right"=>2, "right-down"=>3, "down"=>4, "left-down"=>5, "left"=>6, "left-up"=>7}

def fast_dance(dir, tiles_hash)
  tiles_hash[dir]
end

p fast_dance("up", tiles_hash)


p fast_dance("right-down", tiles_hash)



