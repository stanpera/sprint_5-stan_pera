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
const nickGenerator = users.map((user) => {
  const { firstName, lastName } = user;
  if (
    typeof firstName === "string" &&
    firstName.length > 2 &&
    typeof lastName === "string" &&
    lastName.length > 2
  ) {
    const firstNamePart = firstName.slice(-3).split("").reverse().join("");
    const lastNamePart = lastName.slice(0, 3).split("").reverse().join("");
    const nickname =
      `${firstNamePart}${lastNamePart}`.charAt(0).toUpperCase() +
      `${firstNamePart}${lastNamePart}`.slice(1).toLowerCase();
    return { ...user, nickname };
  } else {
    return { ...user };
  }
});
// console.log(nickGenerator);

// ZADANIE 2
const ageGenerator = nickGenerator
  .filter((user) => {
    const { firstName, lastName, nickname } = user;
    return firstName, lastName, nickname;
  })
  .map((user, index) => {
    const { firstName, lastName} = user;
    const firstNameLength = firstName.length;
    const lastNameLength = lastName.length;
    const firstAndLastNameLength = firstNameLength + lastNameLength;
    let age = 0;
    if (firstAndLastNameLength % 2 === 0) {
      age += firstAndLastNameLength;
    } else {
      const dynamicKeys = Object.keys({firstName, lastName, nickname});
      const dynamicSum = dynamicKeys.reduce((sum, key) => sum + key.length, 0);
      age = Math.ceil(dynamicSum / (index === 0 ? 1 : index));
    }
    return { ...user, age };
  });
// console.log(ageGenerator);

// ZADANIE 3
const mostCommonletterGenerator = ageGenerator.map((user) => {
  const { firstName, lastName, nickname } = user;
  const stringObject =
    `${firstName}${lastName}${nickname}`.toLowerCase();
  const counter = stringObject.split("").reduce((sumOfLetters, letter) => {
    if (/[a-z]/.test(letter)) {
      sumOfLetters[letter] = (sumOfLetters[letter] || 0) + 1;
    }
    return sumOfLetters;
  }, {});
  let mostCommonLetter = null;
  let maxCount = 0;

  for (const [letter, count] of Object.entries(counter)) {
    if (count > maxCount || (count === maxCount && letter < mostCommonLetter)) {
      maxCount = count;
      mostCommonLetter = letter;
    }
  }

  return {
    ...user,
    mostCommonLetter: { letter: mostCommonLetter, count: maxCount },
  };
});

console.log(mostCommonletterGenerator);
