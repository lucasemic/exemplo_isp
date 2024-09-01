import { AviaoComIsp } from "./entity/com-isp/aviao-com-isp";
import { BicicletaComIsp } from "./entity/com-isp/bicicleta-com-isp";
import { CarroComIsp } from "./entity/com-isp/carro-com-isp";

import { AviaoSemIsp } from "./entity/sem-isp/aviao-sem-isp";
import { BicicletaSemIsp } from "./entity/sem-isp/bicicleta-sem-isp";
import { CarroSemIsp } from "./entity/sem-isp/carro-sem-isp";

console.log("\n\n------Sem ISP------");

const carroSemIsp = new CarroSemIsp;
console.log("\n---Carro---");
console.log(carroSemIsp.start());
console.log(carroSemIsp.stop());
console.log(carroSemIsp.refuel());
console.log(carroSemIsp.pedalar());
console.log(carroSemIsp.decolar());

const aviaoSemIsp = new AviaoSemIsp;
console.log("\n---Avião---");
console.log(aviaoSemIsp.start());
console.log(aviaoSemIsp.stop());
console.log(aviaoSemIsp.refuel());
console.log(aviaoSemIsp.decolar());
console.log(aviaoSemIsp.pedalar());

const bicicletaSemIsp = new BicicletaSemIsp;
console.log("\n---Biciceta---");
console.log(bicicletaSemIsp.start());
console.log(bicicletaSemIsp.stop());
console.log(bicicletaSemIsp.refuel());
console.log(bicicletaSemIsp.decolar());
console.log(bicicletaSemIsp.pedalar());

console.log("\n\n------Com ISP------");


const carroComIsp = new CarroComIsp;
console.log("\n---Carro---");
console.log(carroComIsp.start());
console.log(carroComIsp.stop());
console.log(carroComIsp.refuel());

const aviaoComIsp = new AviaoComIsp;
console.log("\n---Avião---");
console.log(aviaoComIsp.decolar());
console.log(aviaoComIsp.start());
console.log(aviaoComIsp.stop());
console.log(aviaoComIsp.refuel());

const bicicletaComIsp = new BicicletaComIsp;
console.log("\n---Biciceta---");
console.log(bicicletaComIsp.pedal());
console.log(bicicletaComIsp.stop());


