import { Range } from "./Range";
import { ICoordinates } from "../Core/Interfaces/ICoordinates";
import { Circle } from "./Circle";
import { IDimension } from "../Core/Interfaces/IDimension";
export declare class CircleWarp extends Circle {
    private readonly canvasSize;
    constructor(x: number, y: number, radius: number, canvasSize: IDimension);
    contains(point: ICoordinates): boolean;
    intersects(range: Range): boolean;
}
