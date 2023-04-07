
console.log("Welcome to Blackjack!");

const c1 = comprarCarta();
const c2 = comprarCarta();
const c3 = comprarCarta();
const c4 = comprarCarta();

let round = confirm("Do you want to start a new round of Blackjack?");

const pointsU = c1.valor + c2.valor;
const pointsI = c3.valor + c4.valor;

if (round) {

  console.log("Results:");
  console.log(`Player: ${c1.texto} ${c2.texto} = ${pointsU}`);
  console.log(`Computer: ${c3.texto} ${c4.texto} = ${pointsI}`);

  switch (round) {
    case (pointsU > 21):
      console.log("PC wins!");
      break;
    case (pointsU > pointsI && pointsU <= 21):
      console.log("Player wins!");
      break;
    case (pointsI > 21):
      console.log("Player wins!");
      break;
    case (pointsU < pointsI && pointsI <= 21):
      console.log("PC wins!");
      break;
    case (pointsU === pointsI):
      console.log("it's a draw!");
      break;
  }

} else {
  console.log('player does not want to start a new round');
};
