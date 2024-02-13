const tournament = document.getElementById('tournament');

function createBracket(players) {
  const numPlayers = players.length;
  const numRounds = Math.ceil(Math.log2(numPlayers));
  const numMatches = Math.pow(2, numRounds - 1);
  const matches = [];

  for (let i = 0; i < numMatches; i++) {
    matches.push({
      player1: null,
      player2: null,
      winner: null,
    });
  }

  let index = 0;
  for (let i = 0; i < numRounds; i++) {
    const round = document.createElement('div');
    round.classList.add('round');
    for (let j = 0; j < numMatches / Math.pow(2, i); j++) {
      const match = document.createElement('div');
      match.classList.add('match');
      const player1 = document.createElement('input');
      player1.type = 'text';
      player1.placeholder = 'Player 1';
      const player2 = document.createElement('input');
      player2.type = 'text';
      player2.placeholder = 'Player 2';
      const submit = document.createElement('button');
      submit.textContent = 'Submit';
      submit.addEventListener('click', () => {
        matches[index].player1 = player1.value;
        matches[index].player2 = player2.value;
        index++;
        if (index === numMatches) {
          renderBracket(matches);
        }
      });
      match.appendChild(player1);
      match.appendChild(player2);
      match.appendChild(submit);
      round.appendChild(match);
    }
    tournament.appendChild(round);
  }
}

function renderBracket(matches) {
  const roundEls = tournament.querySelectorAll('.round');
  for (let i = 0; i < matches.length; i++) {
    const matchEl = roundEls
