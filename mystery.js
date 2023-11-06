let room = "ballroom"; // Change this to test different scenarios
let suspect = "Mr. Kalehoff";

let weapon;

if (room === "ballroom") {
  weapon = "poison";
} else if (room === "gallery") {
  weapon = "trophy";
} else if (room === "billiards room") {
  weapon = "pool stick";
} else if (room === "dining room") {
  weapon = "knife";
}

let solved = (room === "ballroom" && suspect === "Mr. Kalehoff") ||
             (room === "gallery" && suspect === "Ms. Van Cleve") ||
             (room === "billiards room" && suspect === "Mrs. Sparr") ||
             (room === "dining room" && suspect === "Mr. Parkes");

if (solved) {
  console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
} else {
  console.log("The mystery remains unsolved.");
}
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}