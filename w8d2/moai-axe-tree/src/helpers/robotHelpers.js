// ## pickComputerChoice

// - if the robot is cheating should pick the opposite of the player
// - if the robot is not cheating, should pick a random value between 🗿 🪓 🌳

const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const iLikePotatoes = () => {
  console.log("POTATO 🥔🥔🥔🥔🥔");
};

export const pickComputerChoice = (playerChoice, isCheating) => {
  // Matching object
  const opposites = {
    "🗿": "🌳",
    "🪓": "🗿",
    "🌳": "🪓",
  };
  if (isCheating && playerChoice) {
    return opposites[playerChoice];
  }
  // if(alex)
  // if(asking)
  // if(more)
  // if(ifs)
  const randomIndex = randomNumber(3);

  return Object.keys(opposites)[randomIndex];
};

// ## toggleRobot

// - If robot is off, toggling it will turn it on
// - If robot is on, toggling it will turn it off

export const toggleRobot = (isCheating) => {
  return !isCheating;
};
