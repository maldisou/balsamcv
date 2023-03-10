import type { IInfectionStage } from "../Interfaces/IInfectionStage";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../../Options/Interfaces/IOptionLoader";
import { OptionsColor } from "../../../../Options/Classes/OptionsColor";
export declare class InfectionStage implements IInfectionStage, IOptionLoader<IInfectionStage> {
    color: OptionsColor;
    duration?: number;
    infectedStage?: number;
    radius: number;
    rate: number;
    constructor();
    load(data?: RecursivePartial<IInfectionStage>): void;
}
