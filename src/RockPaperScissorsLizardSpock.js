const acciones = ["rock", "paper", "scissors", "lizard", "spock"];
const rules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};

const play = (userChoice) => {
  console.clear();

  const user = userChoice.toLowerCase();
  if (!acciones.includes(user)) return console.log("Elección inválida");
  const IA = acciones[Math.floor(Math.random() * acciones.length)];
  console.log(`User: ${user}`);
  console.log(`IA: ${IA}`);

  console.log(`\n`)

  if (user === IA) return console.log("------ Empate");
  console.log(rules[user].includes(IA) ? "! User gana" : "La IA gana");

};
//console.log(rules["rock"]);

play(acciones[Math.floor(Math.random() * acciones.length)]);
//play("rasasd");