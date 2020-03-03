function abbreviation(a, b) {
  function helper(a, b) {
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
    if (a[a.length - 1].toUpperCase() === b[b.length - 1]) {
      return (
        helper(a.substring(0, a.length - 1), b.substring(0, b.length - 1)) ||
        helper(a.substring(0, a.length - 1), b)
      );
    } else if (a[a.length - 1].toUpperCase() === a[a.length - 1]) {
      return false;
    } else {
      return helper(a.substring(a, a.length - 1), b);
    }
  }
  return helper(a, b) ? "YES" : "NO";
}

let a =
  "OPZFFVQLADBQFBXLOSUMZZWQUKASCUVQZZVWfPIRTytlvpijddqegbwitkhhsbuehtnpndvcandzjzyepvlnkayfkwzegvbratvwezddjqxrxocqgcghuohlmsondvicocltqhvqfqjpctxfomjoukrheijhhndcbipiobvpbskemgykepokluwqhhejdaimvdvlegfyrrwckgojsbsxmsvhhrlnvcrxfaxinjzsjgvvrlcczqlkvgtftsvktvhtfpaklumhkovphilrappbvkarfhvwxxtrugypracozyqyvaqjityoiyemyavpbchaoagrvujocpueczsgcqdjvkjckxhmnaseshjgecusrxozuxgeieleewwskmiprlqnshvmcp";
let b = "OPZFFVQLADBQFBXLOSUMZZWQUKASCUVQZZVWPIRT";

let a1 = "AfPZN";
let b1 = "APZNC";

console.log(abbreviation(a, b));
console.log(abbreviation(a1, b1));
