'use strict';

module.exports = function(grunt) {

  // Configuración del proyecto
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    docco: {
      debug: {
        src: ["*.js"],
        options: {
          output: "docs/",
        },
      },
    },
    run: {
      test: {
        cmd: "npm",
        args: ["run", "test", "--silent"],
      },
    },
  });

  // Carga el plugin de grunt para hacer esto
  grunt.loadNpmTasks('grunt-docco');
  grunt.loadNpmTasks("grunt-run");
  
  // Tarea por omisión: generar la documentación
  grunt.registerTask('default', ['docco']);
  grunt.registerTask("test", ["run:test"]);
};
