# each, each_with, while, for, select, steps, .times

5.times do
  puts "Five times"
end

["a","b"].each do |value|
  puts "The value is #{value}"
end

["a","b"].each_with_index do |value, index|
  puts "The value is #{value}, #{index}"
end

arr = ["Pirate"]
puts arr[0]

(0..10).each do |value|
  puts value
end

i = 0
while i < 5 do
  puts "wiggle"
  i += 1
end