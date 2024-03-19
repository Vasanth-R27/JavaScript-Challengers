// Create task to display your details using objects and perform CRUD opreations on it.

// personal details
const myDetails = {
  myName: "Vasanth",
  DOB: 1999,
  myGender: "Male",
  mycity: "Bangalore",
  // Education
  Qualification: {
    BE: "yes",
    noOfSem: 6,
  },

  // hobbies
  hobbies: {
    PlayingFootball: {
      favPlayer1: "Messi",
      favPlayer2: "Neymar",
      favPlayer3: "CR7",
      favPlayer3: "Martinez",
    },
    sketching: {
      note: "I never look at my watch when I'm sketching!",
    },
  },
};

// CRUD opreations

// Read
// console.log(myDetails.hobbies.PlayingFootball.favPlayer1);

// update
// myDetails.Qualification = "Diploma";

// Delete
// delete myDetails.mycity;

console.log(myDetails);
