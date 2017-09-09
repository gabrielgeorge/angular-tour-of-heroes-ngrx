import { Hero } from './../models/hero';
import * as heroes from '../actions/heroes.actions';

export interface State {
    heroes: { [id: number]: Hero };
    selectedHeroId: number;
    isLoading: boolean;
}

export const initialState: State = {
    heroes: {},
    selectedHeroId: null,
    isLoading: false
};

export function reducer(state = initialState, action: heroes.Actions): State {
    switch (action.type) {

        case heroes.LOAD_HEROES: {
            return {
                ...state,
                isLoading: true
            };

        }

        case heroes.LOAD_HEROES_SUCCESS: {

            const newHeros = {};
            action.payload.forEach(hero => newHeros[hero.id] = hero);

            const heroes = Object.assign({}, state.heroes, newHeros);

            return {
                ...state,
                isLoading: false,
                heroes
            };
        }

        case heroes.UPDATE_HERO: {
            return {
                ...state,
                selectedHeroId: action.payload.id
            };
        }

        case heroes.UPDATE_HERO_SUCCESS: {
            const heroes = Object.assign({}, state.heroes, action.payload);
            return {
                ...state,
                heroes
            };
        }

        case heroes.DELETE_HERO: {
            return {
                ...state,
                selectedHeroId: action.payload.id
            };
        }

        case heroes.DELETE_HERO_SUCCESS: {
            const heroes = Object.assign({}, state.heroes);
            delete heroes[action.payload.id];

            return {
                ...state,
                selectedHeroId: null,
                heroes
            };
        }

        case heroes.SELECT_HERO: {
            return {
                ...state,
                selectedHeroId: action.payload.id
            };
        }

        default: {
            return state;
        }
    }
}

export const getSelectedHero = (state: State) => state.heroes[state.selectedHeroId];
export const getHeroesLoading = (state: State) => state.isLoading;
export const getHeros = (state: State) => state.heroes;
