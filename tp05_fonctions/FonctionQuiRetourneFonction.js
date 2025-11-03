function multiplication(n) {
  return function(nb) {
    return nb * n;
  };
}
let Deux = multiplication(2);
console.log(Deux(5))
