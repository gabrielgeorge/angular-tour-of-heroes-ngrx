import { Router } from '@angular/router';
import { LoadHeroes, SelectHero } from './actions/heroes.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hero } from './models/hero';
import { HeroService } from './service/hero.service';
import * as fromHeroes from './reducers';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [HeroService]
})
export class DashboardComponent implements OnInit {
    heroes: Observable<Hero[]>;

    constructor(private router: Router, private store: Store<fromHeroes.State>) { }
    ngOnInit(): void {

        this.heroes = this.store.select(fromHeroes.getDashboardHeroesList);

        this.store.dispatch(new LoadHeroes());

        // this.heroes = this.HeroService.heros;
        // this.HeroService.getDashboardHeroes();

        // this.HeroService.getHeroes().subscribe(res => this.heroes = res.slice(1, 5));
    }

    goToDetail(hero: Hero) {
        this.store.dispatch(new SelectHero(hero));
        this.router.navigate(['/detail', hero.id]);
    }
}
