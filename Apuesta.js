// Definición de la clase Apuesta:
// `nombre` = nombre de la persona que hace la apuesta
// `fecha` = fecha del partido
// `descripcion` = nombre del partido Ej Eq1 vs Eq2
// `glocal` = goles del equipo local
// `gvisitante` = goles del equipo visitante
exports.Apuesta = function (nombre, fecha, descripcion, glocal, gvisitante) {
  this.nombre = nombre;
  this.fecha = fecha;
  this.descripcion = descripcion;
  this.glocal = glocal;
  this.gvisitante = gvisitante;

  this.as_string = as_string;
  this.get_nombre = get_nombre;
  this.get_fecha = get_fecha;
  this.get_descripcion = get_descripcion;
  this.get_glocal = get_glocal;
  this.get_gvisitante = get_gvisitante;
};

function as_string() {
  return (
    this.nombre +
    ": " +
    this.fecha +
    " - " +
    this.descripcion +
    " [" +
    this.glocal +
    "-" +
    this.gvisitante +
    "]"
  );
}

function get_nombre() {
  return this.nombre;
}

function get_fecha() {
  return this.fecha;
}

function get_descripcion() {
  return this.descripcion;
}

function get_glocal() {
  return this.glocal;
}

function get_gvisitante() {
  return this.gvisitante;
}
