function moy(tab) {
  if (!Array.isArray(tab)) ;
  if (tab.length === 0) return 0;
  for (let i = 0; i < tab.length; i++) {
    if (typeof tab[i] !== "number") ;
  }
  let total = 0;
  for (let i = 0; i < tab.length; i++) {
    total += tab[i];
  }
  return total / tab.length;
}

console.log(moy([1, 2, 3, 4, 5, 6, 7]));
