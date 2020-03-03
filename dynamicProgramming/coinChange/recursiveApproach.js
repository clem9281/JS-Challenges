// this started as a basic recursive approach, and I attempted to use caching to deal with the 2^n time complexity. It is still too slow
var naive_change = function(amount, coins, cache = null) {
  if (cache === null) {
    cache = new Array(amount + 1);
    for (let i = 0; i < cache.length; i++) {
      cache[i] = new Array(amount + 1).fill(null);
    }
    cache[0][0] = 1;
  }
  //   if the amount is 0 there is one way to make that amount, and that is to take no coins
  if (amount === 0) {
    return 1;
  }
  //   if the amount is negative or there are no coins then there is nothing we can do with any of that, there are 0 combinations
  if (coins.length === 0 || amount < 0) {
    return 0;
  }
  //    if there is only one coin and it is less than the amount and the amount is divisible by that coin that is one combonation
  if (coins.length === 1 && amount % coins[0] === 0) {
    cache[amount][coins[0]] = 1;
    return 1;
  }
  //     however if there is only one coin and the amount is not divisible by that there are no combinations
  if (coins.length === 1 && amount % coins[0] !== 0) {
    cache[amount][coins[0]] = 0;
    return 0;
  }
  //     if the coin is greater than the amount we need to disregard that coin and keep looking for combinations
  if (coins[coins.length - 1] > amount) {
    return change(amount, coins.slice(0, coins.length - 1));
  }

  //   is the thing we are looking for in the cache? If so use it
  if (cache[amount][coins[coins.length - 1]] !== null) {
    return cache[amount][coins[coins.length - 1]];
  }
  //     we need to check the cache for the two elements we need to calculate the result. One of those elements is cache[amount- thisCoin], so we need to make sure the difference between the amount and the coin we are looking at is positive. If the things we need to calculate the result are in the cache, load the result into the cache, and return it
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
  //   if our result isn't in the cache, and the elements we need to calculate aren't in the cache, then load our recursive call into the cache, and return that
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
// console.log(change(amount5, coins5));
