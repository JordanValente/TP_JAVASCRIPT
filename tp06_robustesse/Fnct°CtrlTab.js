function verif(tab) {
  if (tab.length === 0) {
    return false;
  }

  for (let i = 0; i < tab.length; i++) {
    if (typeof tab[i] !== "number") {
      return false;
    }
  }

  return true;
}

console.log(verif([1, 2, 3]));
console.log(verif([1, "2", 3]));
console.log(verif([]));
