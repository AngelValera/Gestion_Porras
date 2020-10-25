var apuesta = require("./Apuesta.js"),
  assert = require("assert");

// Creamos una apuesta y comprobamos que es correcta
var primera_apuesta = new apuesta.Apuesta(
  "Angel",
  "31-05-2020",
  "Polopos vs Alhama",
  "2",
  "3"
);
assert(primera_apuesta, "Creada apuesta");
assert.strictEqual(
  primera_apuesta.as_string(),
  "Angel: 31-05-2020 - Polopos vs Alhama [2-3]",
  "Creado"
);

// Creamos una segunda apuesta y comprobamos que sea correcta
var segunda_apuesta = new apuesta.Apuesta(
  "Jose",
  "31-05-2020",
  "Polopos vs Alhama",
  "2",
  "3"
);
assert(segunda_apuesta, "Creada apuesta");
assert.strictEqual(
  segunda_apuesta.as_string(),
  "Jose: 31-05-2020 - Polopos vs Alhama [2-3]",
  "Creado"
);

//Creamos una tercera apuesta y comprobamos que sea correcta
var tercera_apuesta = new apuesta.Apuesta(
  "Carlos",
  "31-05-2020",
  "Polopos vs Alhama",
  "2",
  "3"
);
assert(tercera_apuesta, "Creada apuesta");
assert.strictEqual(
  tercera_apuesta.as_string(),
  "Carlos: 31-05-2020 - Polopos vs Alhama [2-3]",
  "Creado"
);

// Comprobamos que no haya dos apuestas iguales de un mismo partido
assert.notDeepStrictEqual(primera_apuesta, segunda_apuesta, "Apuesta Correcta");

// Comprobamos que la tercera apuesta no es igual que la primera
assert.notDeepStrictEqual(primera_apuesta, tercera_apuesta, "Apuesta Correcta");

// Comprobamos que la tercera apuesta no es igual que la segunda
assert.notDeepStrictEqual(segunda_apuesta, tercera_apuesta, "Apuesta Correcta");

console.log("Si has llegado aquí, han pasado todos los tests");
