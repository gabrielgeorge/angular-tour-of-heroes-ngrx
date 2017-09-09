import { getHeros, getSelectedHero } from './reducers/heroes.reducer';
import { UpdateHero, SelectHero } from './actions/heroes.actions';
import { Store } from '@ngrx/store';
import { HeroService } from './service/hero.service';
import { Hero } from './models/hero';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import * as fromHeroes from './reducers';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css'],
    providers: [HeroService]
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
        private store: Store<fromHeroes.State>
    ) { }
    ngOnInit(): void {
        this.route.paramMap
            // .switchMap((params: ParamMap) => {
            //     const a = { id: Number(params.get('id'))};
            //     this.hero = this.store.dispatch(new SelectHero(a));
            // }).map();
            .switchMap((params: ParamMap) => this.store.select(fromHeroes.getSelectedHero))
            .subscribe(hero => {
                this.hero = hero;
            });
    }

    goBack(): void {
        this.location.back();
    }
    save(): void {
        this.store.dispatch(new UpdateHero(this.hero));
    }
}
