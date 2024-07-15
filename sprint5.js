// DANE WEJŚCIOWE
const users = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Alicja",
    lastName: "Kowalska",
  },
  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];

// ZADANIE 1 
const nickGenerator = users
  .filter(
    (user) =>
      typeof user.firstName === "string" &&
      user.firstName.length > 2 &&
      typeof user.lastName === "string" &&
      user.lastName.length > 2
  )
  .map((user) => {
    const firstNamePart = user.firstName.slice(-3).split("").reverse().join("");
    const lastNamePart = user.lastName.slice(0, 3).split("").reverse().join("");
    const nickname =
      (firstNamePart + lastNamePart).charAt(0).toUpperCase() +
      (firstNamePart + lastNamePart).slice(1).toLowerCase();

    return { ...user, nickname };
  });

// console.log(nickGenerator);

// ZADANIE 2 
const ageGenerator = nickGenerator.map((user, index) => {
  const firstNameLength = user.firstName.length;
  const lastNameLength = user.lastName.length;
  const firstAndLastNameLength = firstNameLength + lastNameLength;
  let age = 0;
  if (firstAndLastNameLength % 2 === 0) {
    age += firstAndLastNameLength;
  } else {
    const dynamicKeys = ["firstName", "lastName", "nickname"];
    const dynamicSum = dynamicKeys.reduce((sum, key) => sum + key.length, 0);
    age = Math.ceil(dynamicSum / (index === 0 ? 1 : index));
  }
  return { ...user, age };
});
// console.log(ageGenerator);

// ZADANIE 3 
const mostCommonletterGenerator = ageGenerator.map((user) => {
  const stringObject =
    `${user.firstName}${user.lastName}${user.nickname}`.toLowerCase();
  const counter = stringObject.split("").reduce((sumOfLetters, letter) => {
    if (/[a-z]/.test(letter)) {
      sumOfLetters[letter] = (sumOfLetters[letter] || 0) + 1;
    }
    return sumOfLetters;
  }, {});
  let mostCommonLetter = null;
  let maxScore = 0;

  for (const [letter, score] of Object.entries(counter)) {
    if (score > maxScore || (score === maxScore && letter < mostCommonLetter)) {
      maxScore = score;
      mostCommonLetter = letter;
    }
  }
  let topLetterwithNumber = `top letter: ${mostCommonLetter}, amount: ${maxScore}`;
  return { ...user, topLetterwithNumber };
});

console.log(mostCommonletterGenerator);
