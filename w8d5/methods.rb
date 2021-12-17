

def snake_case_is_cool amount
  yas_amount = amount * 5
  def yas
    puts "YAS" * yas_amount
  end

  puts "I'm about to print a bunch of things! \n \n \n"

  amount.times do
    puts "NO LARRY NFT"
    yas
  end
end


# snake_case_is_cool 40


def calculate_something num1, num2
  puts num1 + num2
  puts num1 * num2
  "potato"
end

bob = calculate_something(5, 6)
puts bob