import type { IInteractivity } from "./Interactivity/IInteractivity";
import type { IParticles } from "./Particles/IParticles";
import type { IBackgroundMask } from "./BackgroundMask/IBackgroundMask";
import type { IBackground } from "./Background/IBackground";
import type { SingleOrMultiple } from "../../Types";
import type { ITheme } from "./Theme/ITheme";
import type { IFullScreen } from "./FullScreen/IFullScreen";
import type { IMotion } from "./Motion/IMotion";
import type { IManualParticle } from "./IManualParticle";
import type { IResponsive } from "./IResponsive";
export interface IOptions {
    autoPlay: boolean;
    background: IBackground;
    backgroundMask: IBackgroundMask;
    backgroundMode: IFullScreen;
    detectRetina: boolean;
    fps_limit: number;
    fpsLimit: number;
    fullScreen: IFullScreen;
    interactivity: IInteractivity;
    manualParticles: IManualParticle[];
    motion: IMotion;
    particles: IParticles;
    pauseOnBlur: boolean;
    pauseOnOutsideViewport: boolean;
    preset?: SingleOrMultiple<string>;
    responsive: IResponsive[];
    retina_detect: boolean;
    themes: ITheme[];
    [name: string]: unknown;
}