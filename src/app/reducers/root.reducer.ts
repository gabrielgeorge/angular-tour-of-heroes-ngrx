import { createSelector } from 'reselect';
import { compose } from '@ngrx/core/compose';
import { Action, ActionReducer, ActionReducerMap, combineReducers, createFeatureSelector, MetaReducer } from '@ngrx/store';

export interface State {
}

export const metaReducers: MetaReducer<any>[] = [logger];

export const reducers: ActionReducerMap<State> = {
};


export function logger<T>(reducer: ActionReducer<T>): ActionReducer<T, Action> {
    return function (state: T, action: Action): T {
        // console.log('state', state);
        console.log('%c' + action.type.toUpperCase(), 'color: red', action);

        return reducer(state, action);
    };
}
