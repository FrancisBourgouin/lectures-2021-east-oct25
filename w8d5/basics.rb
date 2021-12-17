# Variables & ' vs " & #{} & puts

bob = "Hello"
bob = 5
bob = false
bob = ["Hello", "There"]
bob = { name: "Robert", likes: "Potato" }
bob = 5

# bob.hello

# p bob[:name]
# puts bob[:name]


participants = ["Taylor", "Sofiya", "Andres", "Karolina"]
winners = ["Andres"]

# puts participants - winners

bob.times do
  puts "Winner!!" * 5
end

bob.times { puts "Winner!!" * 5 }


# guest = "Adam"

# p "Hello #{guest}"
# # p 'Hello #{guest}'
# puts "Hello #{guest}"
# # puts 'Hello #{guest}'


p 5 ** 5