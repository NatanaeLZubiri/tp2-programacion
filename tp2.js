let registros = [
  { patente: "AB123CD", velocidad: 120, tipo: "auto",   km: 150 },
  { patente: "XY987ZW", velocidad: 95,  tipo: "camion", km: 300 },
  { patente: "MN456GH", velocidad: 135, tipo: "auto",   km: 80  },
  { patente: "QR789JK", velocidad: 88,  tipo: "moto",   km: 45  },
  { patente: "ST012LM", velocidad: 125, tipo: "auto",   km: 200 }
];

const LIMITE_VELOCIDAD = 110;


let reporteMultas = registros.map(vehiculo => {
  let monto = 0;

  if (vehiculo.velocidad > 130) {
    monto = 10000;
  } else if (vehiculo.velocidad > LIMITE_VELOCIDAD) {
    monto = 5000;
  }

  return {
    patente: vehiculo.patente,
    monto: monto
  };
});

console.log(" PARTE 1: Reporte de multas");
console.log(reporteMultas);


let infractores = registros.filter(vehiculo => vehiculo.velocidad > LIMITE_VELOCIDAD);

let patentesInfractores = registros
  .filter(vehiculo => vehiculo.velocidad > LIMITE_VELOCIDAD)
  .map(vehiculo => vehiculo.patente);

console.log("\n PARTE 2: Infractores");
console.log(`Cantidad de infractores: ${infractores.length}`);
console.log("Patentes:", patentesInfractores);


let totalKm = registros.reduce((acumulador, vehiculo) => {
  return acumulador + vehiculo.km;
}, 0);

let recaudacion = reporteMultas.reduce((acumulador, multa) => {
  return acumulador + multa.monto;
}, 0);

console.log("\n PARTE 3: Reporte final");
console.log(`La flota recorrió ${totalKm} km y generó $${recaudacion} en multas.`);




