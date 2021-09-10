const fs = require("fs");

const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      if (i === hasta) {
        salida += `${base} x ${i} = ${base * i}`;
        break;
      }

      salida += `${base} x ${i} = ${base * i}\n`;
    }

    listar && console.log(salida.random);

    // recibe una ruta absoluta o se pone asi donde se ejecuta app.js?
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;

  } catch (err) {
    throw err;
  }
};

module.exports = { crearArchivo };
