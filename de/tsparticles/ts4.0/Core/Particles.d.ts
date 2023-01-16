import type { Container } from "./Container";
import { Particle } from "./Particle";
import { QuadTree } from "../Utils";
import type { RecursivePartial } from "../Types";
import type { IParticles } from "../Options/Interfaces/Particles/IParticles";
import { ICoordinates, IDelta, IMouseData, IParticle, IRgb } from "./Interfaces";
export declare class Particles {
    private readonly container;
    get count(): number;
    quadTree: QuadTree;
    linksColors: Map<string, string | IRgb | undefined>;
    limit: number;
    needsSort: boolean;
    lastZIndex: number;
    array: Particle[];
    zArray: Particle[];
    pushing?: boolean;
    linksColor?: IRgb | string;
    grabLineColor?: IRgb | string;
    private interactionManager;
    private nextId;
    private linksFreq;
    private trianglesFreq;
    constructor(container: Container);
    init(): void;
    redraw(): void;
    removeAt(index: number, quantity?: number, group?: string, override?: boolean): void;
    remove(particle: Particle, group?: string, override?: boolean): void;
    update(delta: IDelta): void;
    draw(delta: IDelta): void;
    clear(): void;
    push(nb: number, mouse?: IMouseData, overrideOptions?: RecursivePartial<IParticles>, group?: string): void;
    addParticle(position?: ICoordinates, overrideOptions?: RecursivePartial<IParticles>, group?: string): Particle | undefined;
    addSplitParticle(parent: Particle): Particle | undefined;
    removeQuantity(quantity: number, group?: string): void;
    getLinkFrequency(p1: IParticle, p2: IParticle): number;
    getTriangleFrequency(p1: IParticle, p2: IParticle, p3: IParticle): number;
    addManualParticles(): void;
    setDensity(): void;
    private applyDensity;
    private initDensityFactor;
    private pushParticle;
}