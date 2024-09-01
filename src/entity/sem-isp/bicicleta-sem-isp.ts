import { InterfaceVeiculoSemISP } from "../../interfaces/interface-sem-isp/interface-veiculo-sem-isp";

export class BicicletaSemIsp implements InterfaceVeiculoSemISP{
    decolar(): string {
        return "Bicicleta não voa!";
    }
    start(): string {
        return "Não precisa ligar a bicicleta!";
    }
    stop(): string {
        return "Parando Bicicleta";
    }
    refuel(): string {
        return "Bicicleta não precisa de combustivel";
    }
    pedalar(): string {
        return "Pedalando Bicicleta";
    }

}