import { IManualParticle } from "../Interfaces/IManualParticle";
import { IOptionLoader } from "../Interfaces/IOptionLoader";
import { RecursivePartial } from "../../Types";
import { IParticles } from "../Interfaces/Particles/IParticles";
import { ICoordinates } from "../../Core/Interfaces/ICoordinates";
export declare class ManualParticle implements IManualParticle, IOptionLoader<IManualParticle> {
    options?: RecursivePartial<IParticles>;
    position?: ICoordinates;
    load(data?: RecursivePartial<IManualParticle>): void;
}
