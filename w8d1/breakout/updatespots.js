const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 1,
  },
];

const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
};

const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};


const fetchFreeSpots = () => {
  const listOfAppointmentIds = day.appointments

  const listOfEmptyAppointments = listOfAppointmentIds.filter(appId => !appointments[appId].interview)
  const spots = listOfEmptyAppointments.length
}

const bookInterview = (id, interview) => {
  const newAppointment = {...}
  const updatedAppointments = {...appointments}
  newAppointment.interview = interview

  updatedAppointments[id] = appointment
  const updatedDays = {...days}
  const spots = fetchFreeSpots()
  updatedDays[day].spots = spots

  setState()

  // if(interview){
  //   axios.put
  // } else {
  //   axios.delete
  // }
}

// Free spots = appointments with null interviews
// Appointments for a day => appointments array with the appointment ids in each day
// When do we want to change it? When we update appointments in the state