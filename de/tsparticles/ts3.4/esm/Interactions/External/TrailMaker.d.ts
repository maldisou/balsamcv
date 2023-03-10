import { Container } from "../../Core/Container";
import { IDelta } from "../../Core/Interfaces";
import { ExternalInteractorBase } from "../../Core/ExternalInteractorBase";
export declare class TrailMaker extends ExternalInteractorBase {
    private delay;
    private lastPosition?;
    constructor(container: Container);
    interact(delta: IDelta): void;
    isEnabled(): boolean;
    reset(): void;
}
