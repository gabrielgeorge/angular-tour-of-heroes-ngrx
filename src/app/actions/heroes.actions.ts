import { Hero } from './../models/hero';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const CREATE_HERO = '[HERO] Create';
export const CREATE_HERO_SUCCESS = '[HERO] Create Hero Success';
export const CREATE_HERO_FAILURE = '[HERO] Create Hero Failure';
export const DELETE_HERO = '[HERO] Delete Hero';
export const DELETE_HERO_SUCCESS = '[HERO] Delete Hero Success';
export const DELETE_HERO_FAILURE = '[HERO] Delete Hero Failure';
export const UPDATE_HERO = '[HERO] Update Hero';
export const UPDATE_HERO_SUCCESS = '[HERO] Update Hero Success';
export const UPDATE_HERO_FAILURE = '[HERO] Update Hero Failure';
export const LOAD_HEROES = '[HERO] Load Heroes';
export const LOAD_HEROES_SUCCESS = '[HERO] Load Heroes Success';
export const LOAD_HEROES_FAILURE = '[HERO] Load Heroes Failure';
export const SELECT_HERO = '[HERO] Get Hero';
export const SELECT_HERO_SUCCESS = '[HERO] Get Hero Success';
export const SELECT_HERO_FAILURE = '[HERO] Get Hero Failure';
export const RESET_HERO = '[HERO] Reset Hero';

export class CreateHero implements Action {
    readonly type = CREATE_HERO;
    constructor(public payload: Hero) { }
}
export class CreateHeroSuccess implements Action {
    readonly type = CREATE_HERO_SUCCESS;
    constructor(public payload: { id: number }) { }
}
export class DeleteHero implements Action {
    readonly type = DELETE_HERO;
    constructor(public payload: { id: number }) { }
}
export class DeleteHeroSuccess implements Action {
    readonly type = DELETE_HERO_SUCCESS;
    constructor(public payload: { id: number }) { }
}
export class UpdateHero implements Action {
    readonly type = UPDATE_HERO;
    constructor(public payload: Hero) { }
}
export class UpdateHeroSuccess implements Action {
    readonly type = UPDATE_HERO_SUCCESS;
    constructor(public payload: { id: number }) { }
}

export class LoadHeroes implements Action {
    readonly type = LOAD_HEROES;
    constructor() { }
}

export class LoadHeroesSuccess implements Action {
    readonly type = LOAD_HEROES_SUCCESS;
    constructor(public payload: Hero[]) { }
}

export class SelectHero implements Action {
    readonly type = SELECT_HERO;
    constructor(public payload: { id: number }) { }
}

export class SelectHeroSuccess implements Action {
    readonly type = SELECT_HERO_SUCCESS;
    constructor(public payload: Hero) { }
}

export class ResetHero implements Action {
    readonly type = RESET_HERO;
    constructor(public payload: { id: number }) { }
}

export type Actions =
    | CreateHero
    | CreateHeroSuccess
    | DeleteHero
    | DeleteHeroSuccess
    | UpdateHero
    | UpdateHeroSuccess
    | LoadHeroes
    | LoadHeroesSuccess
    | SelectHero
    | SelectHeroSuccess
    | ResetHero;
