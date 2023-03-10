import { Infecter } from "./Infecter";
import { itemFromArray } from "../../Utils";
export class InfectionInstance {
    constructor(container) {
        this.container = container;
        this.container.infecter = new Infecter(this.container);
    }
    particlesSetup() {
        var _a;
        const options = this.container.actualOptions;
        for (let i = 0; i < options.infection.infections; i++) {
            const notInfected = this.container.particles.array.filter((p) => {
                const infP = p;
                if (!infP.infection) {
                    infP.infection = {};
                }
                return infP.infection.stage === undefined;
            });
            const infected = itemFromArray(notInfected);
            (_a = this.container.infecter) === null || _a === void 0 ? void 0 : _a.startInfection(infected, 0);
        }
    }
    particleFillColor(particle) {
        const infParticle = particle;
        const options = this.container.actualOptions;
        if (!infParticle.infection) {
            return;
        }
        const infectionStage = infParticle.infection.stage;
        const infection = options.infection;
        const infectionStages = infection.stages;
        return infectionStage !== undefined ? infectionStages[infectionStage].color : undefined;
    }
    particleStrokeColor(particle) {
        return this.particleFillColor(particle);
    }
}
