// this started as a basic recursive approach, and I attempted to use caching to deal with the 2^n time complexity. It is still too slow
var change = function(amount, coins, cache = null) {
  if (cache === null) {
    cache = new Array(amount + 1);
    for (let i = 0; i < cache.length; i++) {
      cache[i] = new Array(amount + 1).fill(null);
    }
    cache[0][0] = 1;
  }
  if (amount === 0) {
    return 1;
  }
  if (coins.length === 0 || amount < 0) {
    return 0;
  }
  if (coins.length === 1 && amount % coins[0] === 0) {
    cache[amount][coins[0]] = 1;
    return 1;
  }
  if (coins.length === 1 && amount % coins[0] !== 0) {
    cache[amount][coins[0]] = 0;
    return 0;
  }
  if (coins[coins.length - 1] > amount) {
    return change(amount, coins.slice(0, coins.length - 1));
  }
  if (
    amount - coins[coins.length - 1] >= 0 &&
    cache[amount][coins[coins.length - 2]] !== null &&
    cache[amount - coins[coins.length - 1]][coins[coins.length - 1]] !== null
  ) {
    cache[amount][coins[coins.length - 1]] =
      cache[amount][coins[coins.length - 2]] +
      cache[amount - coins[coins.length - 1]][coins[coins.length - 1]];

    return cache[amount][coins[coins.length - 1]];
  }
  if (cache[amount][coins[coins.length - 1]] !== null) {
    return cache[amount][coins[coins.length - 1]];
  }
  cache[amount][coins[coins.length - 1]] =
    change(amount - coins[coins.length - 1], coins, cache) +
    change(amount, coins.slice(0, coins.length - 1), cache);
  return cache[amount][coins[coins.length - 1]];
};

let coins = [3, 5, 7, 8, 9, 10, 11];
let amount = 100;

let coins2 = [1, 2, 5];
let amount2 = 5;

let coins3 = [1, 2, 3];
let amount3 = 4;

let coins4 = [2, 5, 3, 6];
let amount4 = 10;

let coins5 = [1, 101, 102, 103];
let amount5 = 100;

// console.log(change(amount, coins));
// console.log(change(amount2, coins2));
// console.log(change(amount3, coins3));
// console.log(change(amount4, coins4));
console.log(change(amount5, coins5));
