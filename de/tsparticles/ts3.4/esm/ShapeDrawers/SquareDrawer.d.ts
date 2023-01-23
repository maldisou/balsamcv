import { IShapeDrawer } from "../Core/Interfaces/IShapeDrawer";
import { IParticle } from "../Core/Interfaces/IParticle";
export declare class SquareDrawer implements IShapeDrawer {
    getSidesCount(): number;
    draw(context: CanvasRenderingContext2D, particle: IParticle, radius: number): void;
}