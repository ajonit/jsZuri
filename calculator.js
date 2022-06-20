const operation = prompt("Perform an operation: Mention a for addition, s for subsctraction, m for multiplication and d for division");
const number1 = Number(prompt("Enter first Number"));
const number2 = Number(prompt("Enter second Number"));

switch (operation) {
  case "a":
    console.log(number1 + number2);
    break;
  case "s":
    console.log(number1 - number2);
    break;
  case "m":
    console.log(number1 * number2);
    break;
  case "d":
    console.log(number1 / number2);
    break;
  default:
    console.log("Run the script again");
}
