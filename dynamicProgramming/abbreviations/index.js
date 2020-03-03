function abbreviation(a, b) {
  function helper(a, b) {
    let d = new Array(b.length);
    for (let i = 0; i < b.length; i++) {
      d[i] = new Array(a.length).fill(null);
    }
    // are treating each individual letter as a subproblem: so we check if each substring of a could match the abbreviations b. As we assess each letter we check the letter before it, so to save some complexity later let's check the first letter, and the first row now
    if (a[0].toUpperCase() === b[0]) {
      d[0][0] = true;
    }
    // fill the first row as well. Any row after the first, any time we find a letter in a that we think is going to be a part of the abbreviation b, we also have to check that the previous letter in a was "true" with the previous letter in b
    for (let i = 1; i < a.length; i++) {
      if (a[i].toUpperCase() === b[0]) {
        d[0][i] = true;
      } else if (a[i].toLowerCase() === a[i] && d[0][i - 1]) {
        d[0][i] = true;
      } else {
        d[0][i] = false;
      }
    }
    // fill the first column, again so we don't have to check what index we are at to look back later on
    for (let i = 1; i < b.length; i++) {
      if (a[0].toUpperCase() === b[i]) {
        d[i][0] = true;
      } else {
        d[i][0] = false;
      }
    }
    if (a.length < b.length) {
      return false;
    }
    if (!a.length && !b.length) {
      return true;
    }
    if (!a.length && b.length) {
      return false;
    }
    if (!b.length && a.length && a.toLowerCase() === a) {
      return true;
    }
    for (let i = 1; i < b.length; i++) {
      for (let j = 0; j < a.length; j++) {
        // if a[j] is lowercase it can either be dropped, or capitalized. If we can capitalize it we have to check if the letter before it also corresponded to a b value, but if we drop it that means just take the value of the letter before it in a (d[i][j - 1])
        if (a[j].toLowerCase() === a[j]) {
          d[i][j] =
            (a[j].toUpperCase() === b[i] && d[i - 1][j - 1]) || d[i][j - 1];
        }
        // if a[j] is uppercase and it is the same as b we again have to check if the letter before it had a corresponding b value
        else if (
          a[j].toUpperCase() === a[j] &&
          a[j].toUpperCase() === b[i] &&
          d[i - 1][j - 1]
        ) {
          d[i][j] = true;
        } else {
          d[i][j] = false;
        }
      }
    }
    // the truth table we built up will give us our answer now!
    return d[b.length - 1][a.length - 1];
  }
  return helper(a, b) ? "YES" : "NO";
}
module.exports = { abbreviation };
// let a =
//   "OPZFFVQLADBQFBXLOSUMZZWQUKASCUVQZZVWfPIRTytlvpijddqegbwitkhhsbuehtnpndvcandzjzyepvlnkayfkwzegvbratvwezddjqxrxocqgcghuohlmsondvicocltqhvqfqjpctxfomjoukrheijhhndcbipiobvpbskemgykepokluwqhhejdaimvdvlegfyrrwckgojsbsxmsvhhrlnvcrxfaxinjzsjgvvrlcczqlkvgtftsvktvhtfpaklumhkovphilrappbvkarfhvwxxtrugypracozyqyvaqjityoiyemyavpbchaoagrvujocpueczsgcqdjvkjckxhmnaseshjgecusrxozuxgeieleewwskmiprlqnshvmcp";
// let b = "OPZFFVQLADBQFBXLOSUMZZWQUKASCUVQZZVWPIRT";

// let a1 = "AfPZN";
// let b1 = "APZNC";

// let a2 = "AbCdE";
// let b2 = "AFE";

// console.log(abbreviation(a, b));
// console.log(abbreviation(a1, b1));
// console.log(abbreviation(a2, b2));
