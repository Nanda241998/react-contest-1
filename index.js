function OpeningCeremony(callbackFnc) {
    console.log("Let the games begin");
    const score = {red: 0, blue: 0, green: 0, yellow: 0};
    setTimeout(() => {
      console.log("Starting Race 100M...");
      Race100M(score, callbackFnc);
    }, 1000);
  }
  
  function Race100M(score, callbackFnc) {
    const raceTimes = {};
    const colours = Object.keys(score);
    colours.forEach(colour => {
      const time = Math.floor(Math.random() * 6) + 10;
      raceTimes[colour] = time;
    });
    const sortedColours = Object.keys(raceTimes).sort((a, b) => raceTimes[a] - raceTimes[b]);
    score[sortedColours[0]] += 50;
    score[sortedColours[1]] += 25;
    console.log("Race 100M results: ", raceTimes);
    console.log("Score: ", score);
    setTimeout(() => {
      console.log("Starting Long Jump...");
      LongJump(score, callbackFnc);
    }, 3000);
  }
  
  function LongJump(score, callbackFnc) {
    const randomIndex = Math.floor(Math.random() * 4);
    const colours = Object.keys(score);
    const chosenColour = colours[randomIndex];
    score[chosenColour] += 150;
    console.log(`${chosenColour} wins the Long Jump!`);
    console.log("Score: ", score);
    setTimeout(() => {
      console.log("Starting High Jump...");
      HighJump(score, callbackFnc);
    }, 2000);
  }
  
  function HighJump(score, callbackFnc) {
    const inputColour = prompt("Which colour secured the highest jump?");
    if (inputColour && score.hasOwnProperty(inputColour)) {
      score[inputColour] += 100;
    } else {
      console.log("Event was cancelled");
    }
    console.log("Score: ", score);
    console.log("Moving on to the Award Ceremony...");
    AwardCeremony(score);
  }
  
  function AwardCeremony(score) {
    const sortedColours = Object.keys(score).sort((a, b) => score[b] - score[a]);
    console.log(`${sortedColours[0]} came first with ${score[sortedColours[0]]} points.`);
    console.log(`${sortedColours[1]} came second with ${score[sortedColours[1]]} points.`);
    console.log(`${sortedColours[2]} came third with ${score[sortedColours[2]]} points.`);
  }
  
  // start the event
  OpeningCeremony(() => {});
  