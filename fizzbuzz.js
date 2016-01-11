// Place your FizzBuzz code here. 
function fizzyBuzz() { //for loop is encapsulated in function named "fizzyBuzz"
  for (var number = 1; number <= 20; ++number) { //starts at 1 and for each single digit increment afterwards, evaluates if condition is true (and runs following code) until it's false at 20
    if(number % 3 === 0 && number % 5 === 0) //divisible by both 3 & 5 
      console.log("FizzBuzz");

    else if(number % 3 === 0 && !number % 5 === 0) //divisible by 3 only
      console.log("Fizz");

    else if(number % 5 === 0 && !number % 3 === 0) //divisible by 5 only
      console.log("Buzz");

    else 
      console.log(number); //not divisble by either 3 or 5
  }
}
document.write(fizzyBuzz()); //command should output script results directly into webpage
