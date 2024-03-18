// Switch-case

// Withdrawing the cash from the ATM Machine

const cashWithDrawal = "100";
const input = prompt("Enter the withdrawal amount : ");
const input1 = alert("Do you want to print the receipt ?");

switch (true) {
  case cashWithDrawal > 1 && cashWithDrawal <= 99:
    console.log(
      "You can't able to make this transaction. min transaction can be proceed above 100 RS"
    );
    break;

  case cashWithDrawal >= 100 && cashWithDrawal <= 60000:
    console.log("just hold a second. your transaction is under process");
    break;

  case cashWithDrawal > 60000:
    console.log(
      "You can't able to make this transaction because you have reached your daily limits. Please try after 24 hours"
    );
    break;

  default:
    console.log(
      "Can't able to make this transaction due to insuffuient balance!!"
    );
}
