function comparedate(d1, d2) {
  if (!(d1 instanceof Date) || !(d2 instanceof Date)) {
    throw "Les paramètres doivent être des objets Date";
  }

  return d1.getTime() > d2.getTime() ? d1 : d2;
}

let d1 = new Date(2021, 5, 16);
let d2 = new Date(2023, 7, 14);
let dateLaPlusRecente = comparedate(d1, d2);
console.log(dateLaPlusRecente.toLocaleString());
