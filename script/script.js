for (i = 1; i <= 100; i++) {
  //    multipli di 5 e 3
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz");
  }
  //    multipli di 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  //    multipli di 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
