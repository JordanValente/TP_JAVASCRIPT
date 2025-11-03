function creerGestionnaire() {
  return {
    taches: [],
    ajouterTache(description) {
      this.taches.push({ description, terminee: false });
    },
    terminerTache(index) {
      if (this.taches[index]) this.taches[index].terminee = true;
    },
    afficherTaches() {
      for (let i = 0; i < this.taches.length; i++) {
        let tache = this.taches[i];
        console.log(`- ${tache.description} [${tache.terminee ? "Terminée" : "En cours"}]`);
      }
    }
  };
}

const gestionnaire = creerGestionnaire();

gestionnaire.ajouterTache("Apprendre JavaScript");
gestionnaire.ajouterTache("Faire le TP");
gestionnaire.terminerTache(0);
gestionnaire.afficherTaches();
