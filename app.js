require("colors");
const argv = require("./config/yargs");
const { crearArchivo } = require("./helpers/multiplicar");

console.log(argv);

const { b: base, l: listar, h: hasta } = argv;

crearArchivo(base, listar, hasta)
  .then((nombreArchivo) => {
    console.log(nombreArchivo.rainbow, "creado");
  })
  .catch((err) => console.log(err));
