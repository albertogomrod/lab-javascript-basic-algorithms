// Iteration 1: Names and Input

let hacker1 = "Jacinto";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Elena";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

//DEJO EL PRIMER LOOP EN COMENTARIOS PORQUE SI LO QUITO DE AHÍ ME DA ERROR EL RESTO. NO SÉ POR QUÉ.

/*for (let i = 0; i < hacker1.length; i++) {

  let capitalHacker1 = hacker1[i] + " " + hacker1[i+1].toUpperCase() + " " + hacker1[i+2].toUpperCase() + " " + hacker1[i+3].toUpperCase() + " " + hacker1[i+4].toUpperCase() + " " + hacker1[i+5].toUpperCase() + " " + hacker1[i+6].toUpperCase();
  console.log(capitalHacker1);
}*/

//3.3

let alReves = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  const letra = hacker1[i];
  alReves += letra;
}

console.log(alReves);

//SOLO CON EL CONDICIONAL

/*if (hacker1[0] < hacker2[0] === false) {
  console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0] === false) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1[0] === hacker2[0]) {
  console.log("What?! You both have the same name?");
}*/

//INTENTO CON EL LOOP

for (let i = 0; i < hacker1.length; i++) {
  for (let j = 0; j < hacker2.length; j++) {
    if (hacker1[0] < hacker2[0] === false) {
      console.log("The driver's name goes first.");
    } else if (hacker1[0] > hacker2[0] === false) {
      console.log("Yo, the navigator goes first definitely.");
    } else if (hacker1[0] === hacker2[0]) {
      console.log("What?! You both have the same name?");
    }
  }
}
