function calculerAge(dateNaissance) {
  if (!(dateNaissance instanceof Date) || isNaN(dateNaissance)) {
    throw new Error("La date de naissance n'est pas valide");
  }

  const aujourdHui = new Date();
  let annees = aujourdHui.getFullYear() - dateNaissance.getFullYear();
  let mois = aujourdHui.getMonth() - dateNaissance.getMonth();

  // Ajustement si le mois actuel est avant le mois de naissance
  if (mois < 0) {
    annees--;
    mois += 12;
  }

  console.log(`Vous avez ${annees} ans et ${mois} mois.`);
}

const naissance = new Date(2000, 0, 1);
calculerAge(naissance);
