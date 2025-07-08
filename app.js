function showFruits() {
  const fruits = ["apple", "banana", "cherry"];
  const fruitsDiv = document.getElementById("fruits");
  fruitsDiv.innerHTML = "";
  fruits.forEach(fruit => {
    const p = document.createElement("p");
    p.textContent = fruit;
    fruitsDiv.appendChild(p);
  });
}





function showColors() {
  const colors = ["red", "green", "blue"];
  document.getElementById("output").textContent = colors.join(", ");
}








function showNumbers1to10() {
  const numDiv = document.getElementById("numbers1to10");
  numDiv.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    numDiv.innerHTML += i + " ";
  }
}





function showNumbers5to1() {
  const numDiv = document.getElementById("numbers5to1");
  numDiv.innerHTML = "";
  let j = 5;
  while (j >= 1) {
    numDiv.innerHTML += j + " ";
    j--;
  }
}





function showNames() {
  const names = ["Ali", "Sara", "Ahmed"];
  document.getElementById("names").textContent = names.join(", ");
}






function showStatus() {
  document.getElementById("status").textContent = "Loading...";
}





function showSum() {
  const numbers = [5, 10, 15];
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  document.getElementById("sum").textContent = "Total Sum: " + total;
}






function showCities() {
  const cities = ["Karachi", "Lahore", "Quetta"];
  document.getElementById("cities").textContent = cities.join(" - ");
}







function showEvenNumbers() {
  const evenDiv = document.getElementById("evenNumbers");
  evenDiv.innerHTML = "";
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      evenDiv.innerHTML += i + " ";
    }
  }
}





function showMaxNumber() {
  const nums = [45, 22, 89, 100];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  document.getElementById("max").textContent = "Maximum Number: " + max;
}









function taskComplete() {
  document.querySelector("#result").textContent = "Task Complete";
}





function averageTemperature() {
  const temps = [30, 35, 32, 40];
  let sum = 0;
  for (let t of temps) sum += t;
  const avg = sum / temps.length;
  document.querySelector("#averageTemp").textContent = "Average: " + avg.toFixed(1) + "°C";
}





function sum1to100() {
  let total = 0;
  for (let i = 1; i <= 100; i++) {
    total += i;
  }
  document.querySelector("#totalSum").textContent = "Total Sum: " + total;
}




function showAnimals() {
  const animals = ["dog", "cat", "bird"];
  document.querySelector("#animals").textContent = animals.join(", ");
}




function updateHeading() {
  document.querySelector("#title").textContent = "Welcome to JavaScript!";
}






function divisibleByFive() {
  console.log("Numbers from 1 to 50 divisible by 5:");
  for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) console.log(i);
  }
}





function countHighScores() {
  const scores = [80, 60, 90, 70];
  let count = 0;
  for (let s of scores) {
    if (s > 75) count++;
  }
  document.querySelector("#highScores").textContent = "Scores above 75: " + count;
}




function updateMessage() {
  document.querySelector("#message").textContent = "Updated successfully";
}




function showSubjects() {
  const subjects = ["Math", "Science", "English"];
  document.querySelector("#subjectsList").textContent = subjects.join(" | ");
}




function countDownAndSum() {
  const countdownDiv = document.getElementById("countdown");
  countdownDiv.innerHTML = "";
  for (let i = 10; i >= 1; i--) {
    countdownDiv.innerHTML += i + " ";
  }

  const nums = [5, 10, 15, 20];
  let sum = 0;
  for (let n of nums) sum += n;
  document.getElementById("arraySum").textContent = "Sum of array: " + sum;
}



function findLargest() {
  const arr = [45, 67, 12, 89, 34];
  let max = arr[0];
  for (let n of arr) if (n > max) max = n;
  task21.textContent = max;
}

function countEvens() {
  const arr = [3, 8, 6, 1, 9, 2];
  let count = 0;
  for (let n of arr) if (n % 2 === 0) count++;
  task22.textContent = count;
}

function calculateAverage() {
  const arr = [20, 30, 40, 50];
  let sum = 0;
  for (let n of arr) sum += n;
  task23.textContent = sum / arr.length;
}

function multiplyByThree() {
  const arr = [2, 4, 6, 8, 10];
  const result = [];
  for (let n of arr) result.push(n * 3);
  task24.textContent = result.join(", ");
}

function countGreaterThanFour() {
  const arr = [1, 3, 5, 7, 9];
  let count = 0;
  for (let n of arr) if (n > 4) count++;
  task25.textContent = count;
}

function sumDivisibleBy5() {
  const arr = [10, 15, 20, 25, 30];
  let sum = 0;
  for (let n of arr) if (n % 5 === 0) sum += n;
  task26.textContent = sum;
}

function checkTwentyFive() {
  const arr = [10, 20, 30, 40, 25];
  task27.textContent = arr.includes(25) ? "Yes" : "No";
}

function sumArrays() {
  const a = [1, 2, 3], b = [4, 5, 6], c = [];
  for (let i = 0; i < a.length; i++) c.push(a[i] + b[i]);
  task28.textContent = c.join(", ");
}

function secondLargest() {
  const arr = [10, 99, 23, 87, 56];
  let max = -Infinity, second = -Infinity;
  for (let n of arr) {
    if (n > max) {
      second = max;
      max = n;
    } else if (n > second && n !== max) {
      second = n;
    }
  }
  task29.textContent = second;
}

function reverseArray() {
  const arr = [1, 2, 3, 4, 5];
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) reversed.push(arr[i]);
  task30.textContent = reversed.join(", ");
}

function printPrimes() {
  const primes = [];
  for (let n = 2; n <= 50; n++) {
    let isPrime = true;
    for (let d = 2; d <= Math.sqrt(n); d++) {
      if (n % d === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(n);
  }
  task31.textContent = primes.join(", ");
}

function diffMaxMin() {
  const arr = [11, 4, 99, 2, 47];
  let max = arr[0], min = arr[0];
  for (let n of arr) {
    if (n > max) max = n;
    if (n < min) min = n;
  }
  task32.textContent = max - min;
}

function countNegatives() {
  const arr = [0, -1, -5, 6, 8, -3];
  let count = 0;
  for (let n of arr) if (n < 0) count++;
  task33.textContent = count;
}

function filterOdds() {
  const arr = [1, 2, 3, 4, 5];
  const odds = [];
  for (let n of arr) if (n % 2 !== 0) odds.push(n);
  task34.textContent = odds.join(", ");
}

function removeZeros() {
  const arr = [0, 1, 0, 3, 0, 5];
  const nonZero = [];
  for (let n of arr) if (n !== 0) nonZero.push(n);
  task35.textContent = nonZero.join(", ");
}

function swapFirstLast() {
  const arr = [1, 2, 3, 4, 5, 6];
  const temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  task36.textContent = arr.join(", ");
}

function checkAllEven() {
  const arr = [2, 4, 6, 8];
  const allEven = arr.every(n => n % 2 === 0);
  task37.textContent = allEven ? "Yes" : "No";
}

function countAboveAverage() {
  const arr = [5, 10, 15, 20, 25];
  const avg = arr.reduce((a, b) => a + b) / arr.length;
  let count = 0;
  for (let n of arr) if (n >= avg) count++;
  task38.textContent = count;
}

function checkAllEqual() {
  const arr = [2, 2, 2, 2, 2];
  const allSame = arr.every(n => n === arr[0]);
  task39.textContent = allSame ? "Yes" : "No";
}







