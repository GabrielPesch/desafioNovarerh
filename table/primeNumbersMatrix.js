import  Matrix  from './Matrix.js';

export class PrimeNumbersMatrix extends Matrix {
  main() {
    this.generateMatrixArray();
    this.printMatrix();
  }
  
  generateMatrixArray() {
    let index = 0;
    let numberToCheck = 1;


    while (index < this._tableSize) {
      const primeNumber = this.nextPrime(numberToCheck);
      numberToCheck = primeNumber;
      index++;
      this._matrixArray[index] = primeNumber;
    }
  }

  nextPrime(number) {
    while(!this.isPrime(++number)) {};
    return number;
  }

  isPrime(number) {
    let squaredNumber = Math.floor(Math.sqrt(number));
    let prime = number !== 1;

    for(let index = 2; index < squaredNumber + 1; index+= 1) {
      if(number % index === 0) {
        prime = false;
        break;
      }
    }
    return prime;
  }
}