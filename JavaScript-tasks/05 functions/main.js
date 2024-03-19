// Function declartion

function myIntrodution(myName) {
  return `Hi, my name is ${myName}`;
}

const myself = myIntrodution("Vasanth R");
console.log(myself);

// // Function expression

const myIntrodution = (myName) => {
  return `Hi, my name is ${myName}`;
};

const myself = myIntrodution("Vasanth R");
console.log(myself);

// passing arguments and receving parameters

(function ballon_dOr(Messi, Ronaldo) {
  if ((Messi = Ronaldo)) {
    console.log("Messi is the greatest of all time");
  } else {
    console.log("Ronaldo is the greatest of all time");
  }
})(8, 5);
