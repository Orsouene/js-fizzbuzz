// È un programma che stampa i numeri da 1 a 100. Per i multipli di 3 viene scritto 'Fizz', per i multipli di 5 viene scritto 'Buzz' e per i numeri che sono sia multipli di 3 che di 5 viene scritto 'FizzBuzz'

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
