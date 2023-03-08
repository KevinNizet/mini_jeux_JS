function justePrix() {
  let userName = prompt("Quel est votre prénom ?");
  let familyName = prompt("Quel est votre nom de famille ?");
  console.log(`Bienvenue ${userName} ${familyName} !`);
  const rightPrice = Math.floor(Math.random() * 100) + 1;

  let randomNumber;

  for (let i = 0; i < 1; ) {
    let randomNumber = parseInt(
      prompt(
        "Donnez un nombre aléatoire entre 1 et 100. Je vais essayer de battre l'humanité !"
      )
    );
    if (randomNumber > rightPrice) {
      console.log("Nope. C'est moins !");
    } else if (randomNumber < rightPrice) {
      console.log("Nope. C'est plus !");
    } else if (randomNumber === rightPrice) {
      console.log(
        `Bien joué... ${userName} ${familyName} gagne! L'IA perd (pour cette fois)`
      );
      i++;
    }
  }
}
