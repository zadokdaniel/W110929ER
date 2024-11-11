/** EXAMPLE 1 */

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// console.log("winner!");

/** EXAMPLE 2 */

welcomeUser();

function welcomeUser() {
  const name = process.argv[2];

  if (!name) {
    console.log("no name provided, thus you are not welcome!");
    return;
  }

  console.log(`welcome, ${name}`);
}
