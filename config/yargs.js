const colors = require("colors");

const argv = require("yargs")
  .options({
    b: {
      alias: "base",
      type: "number",
      demandOption: true,
      describe: colors.random("Es la base de la tabla de multiplicar"),
    },
    l: {
      alias: "listar",
      type: "boolean",
      default: false,
      describe: colors.random("Muestra la tabla en consola"),
    },
    h: {
      alias: "hasta",
      type: "number",
      default: 10,
      describe: colors.random("Numero al cual llega la tabla"),
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

// exportación por default
module.exports = argv;
