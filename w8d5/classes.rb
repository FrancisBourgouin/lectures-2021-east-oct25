class Student
  def initialize name, cohort, location, grades
    @name = name
    @cohort = cohort
    @grades = grades
    @location = location
  end
  attr_reader :name

  attr_accessor :location, :cohort, :grades

  def turn_webcam_on 
    puts "My webcam is on now"
  end

  def greetings somebody
    puts "Hi #{somebody} I'm #{@name}"
  end
end



grades = {
  tests:[95,95,95],
  tis:["A","B","A-"]
}

martin = Student.new("Martin","East","Tronno", grades)
martin_clone = martin

martin.turn_webcam_on


martin.greetings "Alex"
# puts martin[:name]
# p martin

# puts martin_clone
# p martin_clone