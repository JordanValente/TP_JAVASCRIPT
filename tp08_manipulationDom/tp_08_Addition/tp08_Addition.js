function addition() {
  const nombre = parseFloat(document.getElementById("nombre").value);

    const nombre2 = parseFloat(document.getElementById("nombre2").value);

  const resultatSpan = document.querySelector("#resultat")
  if (isNaN(nombre) || isNaN(nombre2)) {
    resultatSpan.style.backgroundColor = "red";
    resultatSpan.textContent = "chiffres";
  } else {
    resultatSpan.style.backgroundColor = "white";
    const somme = nombre + nombre2;
    resultatSpan.textContent = somme;
  }
}

