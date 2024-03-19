// Create an array and apply CRUD opeator

// prmitive array

let footballTeams = ["Argentina", "Brazil", "Portugal", "France", "Spain"];

// read
console.log(footballTeams.indexOf("Spain"));
console.log(footballTeams.includes("Argentina"));

// adding new teams

footballTeams.push("Germany");
footballTeams.unshift("South Korea");
footballTeams.splice(1, 2, "Belguim", "India");

// deleting
footballTeams.pop();
footballTeams.shift();
footballTeams.splice(2, 4);

console.log(footballTeams);

// Referance array

const brandShoes = [
  { size: 8, brand: "addidas", quantity: 4 },
  { size: 7, brand: "nike", quantity: 3 },
  { size: 10, brand: "puma", quantity: 1 },
];

const brandSlippers = [
  { size: 7, brand: "crocs", quantity: 1 },
  { size: 9, brand: "woodland", quantity: 1 },
  { size: 8, brand: "addidas", quantity: 2 },
];
console.log(brandShoes);

// read
let brand = brandShoes.find((brandShoes) => {
  return brandShoes.brand === "nike";
});
console.log(brandShoes);

// adding

brandShoes.push({ size: 6, brand: "bata", quantity: 1 });
console.log(brandShoes);

// combining

let brands = [...brandShoes, ...brandSlippers];
console.log(brands);
