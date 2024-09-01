import { InterfaceStart} from "../../interfaces/interface-com-isp/interface-start-com-isp";
import { InterfaceStop } from "../../interfaces/interface-com-isp/interface-stop-com-isp";
import { InterfaceRefuel } from "../../interfaces/interface-com-isp/interface-refuel-com-isp";

export class CarroComIsp implements InterfaceStart, InterfaceStop, InterfaceRefuel{
    start(): string {
        return "Ligando Carro"
    }

    stop(): string {
        return "Parando Carro"
    }

    refuel(): string {
        return "Abastecendo Carro"
    }
}