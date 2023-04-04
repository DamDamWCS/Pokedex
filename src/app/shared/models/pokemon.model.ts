import { Evolution } from "./evolution.model";
import { PreEvolution } from "./preEvolution.model";
import { Resistance } from "./resistance.model";
import { Type } from "./type.model";
import { Stat } from "./stat.model";

export class Pokemon {
    constructor(
        public id: number,
        public pokedexId: number,
        public name: string,
        public image: string,
        public sprite: string,
        public slug: string,
        public stats: Stat,
        public apiTypes: Type[],
        public apiGeneration: number,
        public apiResistances: Resistance[],
        public resistanceModifyingAbilitiesForApi: [],
        public apiEvolutions: Evolution[],
        public apiPreEvolution: PreEvolution,
        public apiResistancesWithAbilities: [],
    ) {}
}