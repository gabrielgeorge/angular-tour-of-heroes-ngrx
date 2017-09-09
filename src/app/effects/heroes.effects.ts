import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {
    DELETE_HERO,
    DeleteHero,
    DeleteHeroSuccess,
    LOAD_HEROES,
    LoadHeroesSuccess,
    SelectHero,
    UPDATE_HERO,
    UpdateHero,
    UpdateHeroSuccess,
} from './../actions/heroes.actions';
import { HeroService } from './../service/hero.service';


@Injectable()
export class HeroEffects {

    @Effect()
    loadHeroes$: Observable<Action> = this.action$
        .ofType(LOAD_HEROES)
        .switchMap(action => {

            return this.heroesService.getHeros()
                .map((heros) => {
                    return new LoadHeroesSuccess(heros);
                });

        });

    @Effect()
    updateHero$: Observable<Action> = this.action$
        .ofType(UPDATE_HERO)
        .switchMap((action: UpdateHero) => {

            return this.heroesService.updateHero(action.payload)
                .map((heros) => {
                    return new UpdateHeroSuccess(heros);
                });

        });

    @Effect()
    deleteHero$: Observable<Action> = this.action$
        .ofType(DELETE_HERO)
        .switchMap((action: DeleteHero) => {

            return this.heroesService.deleteHero(action.payload)
                .map((heros) => {
                    return new DeleteHeroSuccess(heros);
                });
        });

    constructor(private action$: Actions,
        private heroesService: HeroService) {

    }

}
