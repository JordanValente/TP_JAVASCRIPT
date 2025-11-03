function moy(tab) {
  if (!Array.isArray(tab)) {
    throw 'Le paramètre doit être un tableau';
  }
  if (tab.length === 0) {
    return 0;
  }
  for (let i = 0; i < tab.length; i++) {
    if (typeof tab[i] !== "number") {
      throw `L'élément à l'index ${i} n'est pas un nombre`;
    }
  }
  let total = 0;
  for (let i = 0; i < tab.length; i++) {
    total += tab[i];
  }
  return total / tab.length;
}

// 1
try {
  console.log(" 1 :", moy([1, 2, 3, 4, 5]));
} catch (e) {
  console.log("Erreur 1 :", e);
}

// 2
try {
  console.log(" 2 :", moy([1, "deux", 3]));
} catch (e) {
  console.log("Erreur 2 :", e);
}

// 3
try {
  console.log(" 3 :", moy("pas un tableau"));
} catch (e) {
  console.log("Erreur 3 :", e);
}
