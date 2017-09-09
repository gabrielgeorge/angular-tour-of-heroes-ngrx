import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store/src/selector';
import * as _ from 'lodash';

import * as fromHeroes from './heroes.reducer';
import * as fromRoot from './root.reducer';

export const HERO_FEATURENAME = 'heroes';

export interface HeroGlobalState {
    heroes: fromHeroes.State;
}

export interface State extends fromRoot.State {
    heroes: HeroGlobalState;
}

export const reducers = {
    heroes: fromHeroes.reducer
};

export const selectHeroGlobalState = createFeatureSelector<HeroGlobalState>(HERO_FEATURENAME);
export const selectHeroState = createSelector(selectHeroGlobalState, (state: HeroGlobalState) => state.heroes);

export const getHeroes = createSelector(selectHeroState, fromHeroes.getHeros);
export const getDashboardHeroesList = createSelector(getHeroes, heros => {
    return _.values(heros).slice(1, 5);
});
export const getHeroesList = createSelector(getHeroes, heros => {
    return _.values(heros);
});

export const getSelectedHero = createSelector(selectHeroState, fromHeroes.getSelectedHero);
