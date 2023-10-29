var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance) {
  if (isActive && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2) + ".");
  } else if (!isActive) {
    console.log("Your account is no longer active.");
  } else if (balance === 0) {
    console.log("Your account is empty.");
  } else {
    console.log("Your balance is negative. Please contact the bank.");
  }
} else {
  console.log("Thank you. Have a nice day!");
}
