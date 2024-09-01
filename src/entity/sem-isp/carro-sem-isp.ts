import { InterfaceVeiculoSemISP } from "../../interfaces/interface-sem-isp/interface-veiculo-sem-isp";

export class CarroSemIsp implements InterfaceVeiculoSemISP{
    decolar(): string {
        return "Carro não voa!";
    }
    public start(): string {
        return "Ligando Carro";
    }
    stop(): string {
        return "Parando Carro";
    }
    refuel(): string {
        return "Abastecendo Carro";
    }
    pedalar(): string {
        return "Carro não precisa pedalar!";
        
    }

}