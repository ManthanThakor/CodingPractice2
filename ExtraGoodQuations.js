//! ---------------------------------------------
//? -----------  Football team and score is given. find the wining team with highest goal  ------------
//! ---------------------------------------------

const teams = [
  { team: "Team A", score: 2 },
  { team: "Team B", score: 5 },
  { team: "Team C", score: 3 },
];

function findWinningTeam(teams) {
  if (teams.length === 0) return null;

 let winingTeam = teams[0];
 console.log(`${teams[0].team} is the initial winning team with ${teams[0].score} goals. ${JSON.stringify(teams[0])}  `);

  for (let i = 0; i < teams.length; i++) {
    if (teams[i].score > winingTeam.score) {
      winingTeam = teams[i];
    }
  }
  return winingTeam;
}

const winner = findWinningTeam(teams);
console.log(`The winning team is ${winner.team} with ${winner.score} goals.`); // The winning team is Team B with 5 goals.
