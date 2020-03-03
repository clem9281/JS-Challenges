/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

function change(amount, coins) {
  if (amount === 0) {
    return 1;
  }
  //   if the amount is negative or there are no coins then there is nothing we can do with any of that, there are 0 combinations
  if (coins.length === 0 || amount < 0) {
    return 0;
  }
  //    if there is only one coin and it is less than the amount and the amount is divisible by that coin that is one combonation
  if (coins.length === 1 && amount % coins[0] === 0) {
    return 1;
  }
  //     however if there is only one coin and the amount is not divisible by that there are no combinations
  if (coins.length === 1 && amount % coins[0] !== 0) {
    return 0;
  }
  //     we are going to build up a table of results of our sub problems
  //     it will be a 2d array where the y, or each inner array will represent the results for a single coin, and each x, or each element of the inner arrays, will represent each possible amount
  //     we know for every amount 0, no matter the coin, there is 1 possible combo, so we will populate that field of our table
  //     we will also populate the first row: at that point we only have one coin, so if any amount is divisible by that coin, we have found 1 combo
  //     For every row after that we will have to base our calculations off of the row prior: if the amount is less than that coin, carry over the number of combos for that amount from the previous coin. We can not generate a combo for that amount using that coin
  //     but if the amount is greater than the coin, we have to calculate the number of combos based on our subproblems. So we will look at the amount - coin in that coin's row, and add it to the combos in the previous coin's row for that amount. Once we have iterated through all the coins in this manner, we need only look in our table to see how many combos for that coin/amount
  const table = new Array(coins.length);
  for (let i = 0; i < coins.length; i++) {
    //         amount + 1 because we need a field for 0 and also for amount
    table[i] = new Array(amount + 1).fill(0);
    // initialize that first column
    table[i][0] = 1;
  }

  //     initialize the first row with the first coin in coins
  //     don't forget to start at 1!
  for (let i = 1; i <= amount; i++) {
    let coin = coins[0];
    if (i >= coin && i % coin === 0) {
      table[0][i] = 1;
    } else {
      table[0][i] = 0;
    }
  }
  //     now iterate over the rest of the coins and amounts
  //     don't forget to start at 1 for both!
  for (let i = 1; i < coins.length; i++) {
    let coin = coins[i];
    for (let j = 1; j <= amount; j++) {
      if (j >= coin) {
        table[i][j] = table[i][j - coin] + table[i - 1][j];
      } else {
        table[i][j] = table[i - 1][j];
      }
    }
  }

  return table[coins.length - 1][amount];
}

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
console.log(change(amount3, coins3));
// console.log(change(amount4, coins4));
// console.log(change(amount5, coins5));
module.exports = { change };
