function addition() {
  const nombre = parseFloat(document.getElementById("nombre").value);

  const nombre2 = parseFloat(document.getElementById("nombre2").value);

  const resultats = document.querySelector("#resultat")
  if (isNaN(nombre) || isNaN(nombre2)) {
    resultats.style.backgroundColor = "red";
    resultats.textContent = "chiffres";
  } else {
    resultats.style.backgroundColor = "white";
    const somme = nombre + nombre2;
    resultats.textContent = "resultat" + somme;
  }
}

