var assert = require("assert"),
  apuesta = require("./Apuesta.js");

describe("Apuesta", function () {
  // Testea que se haya cargado bien la librería
  describe("Carga", function () {
    it("La librería debe estar cargada", function () {
      assert(apuesta, "Cargado");
    });
  });

  describe("Crea", function () {
    it("Las apuestas deben crearse correctamente", function () {
      var nueva_apuesta = new apuesta.Apuesta(
        "Angel",
        "31-05-2020",
        "Polopos vs Alhama",
        "2",
        "3"
      );
      assert.strictEqual(
        nueva_apuesta.as_string(),
        "Angel: 31-05-2020 - Polopos vs Alhama [2-3]",
        "Creado"
      );
    });
  });

  describe("Crea", function () {
    it("El nombre del creador de una apuesta no puede cambiar", function () {
      var nueva_apuesta = new apuesta.Apuesta(
        "Angel",
        "31-05-2020",
        "Polopos vs Alhama",
        "2",
        "3"
      );
      assert.strictEqual(nueva_apuesta.get_nombre(), "Angel", "Comprobado");
    });
  });

  describe("Crea", function () {
    it("La fecha del partido de una apuesta no puede cambiar", function () {
      var nueva_apuesta = new apuesta.Apuesta(
        "Angel",
        "31-05-2020",
        "Polopos vs Alhama",
        "2",
        "3"
      );
      assert.strictEqual(
        nueva_apuesta.get_fecha(),"31-05-2020","Comprobado");
    });
  });

  describe("Crea", function () {
    it("El nombre del partido de una apuesta no puede cambiar", function () {
      var nueva_apuesta = new apuesta.Apuesta(
        "Angel",
        "31-05-2020",
        "Polopos vs Alhama",
        "2",
        "3"
      );
      assert.strictEqual(nueva_apuesta.get_descripcion(), "Polopos vs Alhama", "Comprobado");
    });
  });

  describe("Crea", function () {
    it("El resultado local de una apuesta no puede cambiar", function () {
      var nueva_apuesta = new apuesta.Apuesta(
        "Angel",
        "31-05-2020",
        "Polopos vs Alhama",
        "2",
        "3"
      );
      assert.strictEqual(nueva_apuesta.get_glocal(), "2", "Comprobado");      
    });
  });

  describe("Crea", function () {
    it("El resultado visitante de una apuesta no puede cambiar", function () {
      var nueva_apuesta = new apuesta.Apuesta(
        "Angel",
        "31-05-2020",
        "Polopos vs Alhama",
        "2",
        "3"
      );
      assert.strictEqual(nueva_apuesta.get_gvisitante(), "3", "Comprobado");
    });
  });
});
