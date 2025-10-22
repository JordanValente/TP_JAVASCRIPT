function chargerPaysInfos() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://restcountries.com/v2/all?fields=name,capital,population,region", true);

  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      const data = JSON.parse(req.responseText);
      const tbody = document.getElementById("contenu");

      data.forEach(pays => {
        const ligne = document.createElement("tr");

        const celluleNom = document.createElement("td");
        celluleNom.textContent = pays.name;
        ligne.appendChild(celluleNom);

        const celluleCapitale = document.createElement("td");
        celluleCapitale.textContent = pays.capital || "N/A";
        ligne.appendChild(celluleCapitale);

        const cellulePopulation = document.createElement("td");
        cellulePopulation.textContent = pays.population.toLocaleString();
        ligne.appendChild(cellulePopulation);

        const celluleRegion = document.createElement("td");
        celluleRegion.textContent = pays.region || "N/A";
        ligne.appendChild(celluleRegion);

        tbody.appendChild(ligne);
      });
    }
  };

  req.send();
}
