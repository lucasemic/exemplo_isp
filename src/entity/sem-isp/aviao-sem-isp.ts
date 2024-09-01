import { InterfaceVeiculoSemISP } from "../../interfaces/interface-sem-isp/interface-veiculo-sem-isp";

export class AviaoSemIsp implements InterfaceVeiculoSemISP{
    decolar(): string {
        return "Avião Decolando";
    }
    public start(): string {
        return "Avião Ligando";
    }
    stop(): string {
        return "Avião Parando";
    }
    refuel(): string {
        return "Abastecendo Avião";
    }
    pedalar(): string {
        return "Avião não precisa pedalar!";
        
    }

}