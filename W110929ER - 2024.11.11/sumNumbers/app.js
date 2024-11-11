console.log("hello");

sumNumbers();

function sumNumbers() {
  const numbers = process.argv.slice(2).map(Number).filter(Boolean);

  const sum = numbers.slice(1).reduce((prev, curr) => prev + curr, numbers[0]);

  console.log(sum);
}
