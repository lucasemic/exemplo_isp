import { InterfaceStart } from "../../interfaces/interface-com-isp/interface-start-com-isp";
import { InterfaceStop} from "../../interfaces/interface-com-isp/interface-stop-com-isp";
import { InterfaceRefuel } from "../../interfaces/interface-com-isp/interface-refuel-com-isp";
import { InterfaceDecolar } from "../../interfaces/interface-com-isp/interface-decolar-com-isp";

export class AviaoComIsp implements InterfaceDecolar, InterfaceRefuel, InterfaceStart, InterfaceStop{
    decolar(): string {
        return "Decolando avião"
    }

    refuel(): string {
        return "Abastecendo avião"
    }

    start(): string {
        return "Ligando avião"
    }

    stop(): string {
        return "Parando avião"
    }
}
