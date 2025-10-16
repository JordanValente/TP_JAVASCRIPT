function moy(tab) {
  if (!Array.isArray(tab)) return "Erreur : ce n’est pas un tableau";
  if (tab.length === 0) return 0;
  if (!tab.every(el => typeof el === "number")) return "Erreur : tous les éléments doivent être des nombres";
  const somme = tab.reduce((acc, val) => acc + val, 0);
  return somme / tab.length;}console.log(moy([10, 20, 30]));
