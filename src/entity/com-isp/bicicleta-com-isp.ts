import { InterfaceStop} from "../../interfaces/interface-com-isp/interface-stop-com-isp";
import { InterfacePedal} from "../../interfaces/interface-com-isp/interface-pedal-com-isp";

export class BicicletaComIsp implements InterfaceStop, InterfacePedal{
    stop(): string {
        return "Parando Bicicleta"
    }

    pedal(): string {
        return "Pedalando Bicicleta"
    }
}