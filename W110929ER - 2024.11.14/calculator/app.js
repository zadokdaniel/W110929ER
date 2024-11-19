const RESULT_COLOR = "\x1b[32m%s\x1b[0m";

const opearations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  x: (a, b) => a * b,
  "/": (a, b) => a / b,
  "^": (a, b) => a ** b,
};

const ALLOWED_OPERATORS = Object.keys(opearations);

const [operator, numbers] = normalizeArguments();
const result = calculate(operator, numbers);

console.log(numbers.join(` ${operator} `), " = ");
console.log(RESULT_COLOR, result);

function normalizeArguments() {
  const [, , operator, ...numbersInput] = process.argv;

  if (!ALLOWED_OPERATORS.includes(operator)) {
    throw new Error(
      `operator must be one of ${ALLOWED_OPERATORS.join(
        " "
      )}, you provided ${operator}`
    );
  }

  const numbers = numbersInput.map(Number);
  if (numbers.includes(NaN)) {
    throw new Error("All values must be of type number");
  }

  return [operator, numbers];
}

function calculate(operator, numbers) {
  const [firstNumber, ...otherNumbers] = numbers;
  const result = otherNumbers.reduce(opearations[operator], firstNumber);

  return result;
}
