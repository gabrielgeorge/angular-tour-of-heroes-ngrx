import { Observable } from 'rxjs/Observable';
import { CreateHero, LoadHeroes, DeleteHero, SelectHero } from './actions/heroes.actions';
import { getHeroesList } from './reducers/index';
import { Store } from '@ngrx/store';
import { HeroService } from './service/hero.service';
import { Router } from '@angular/router';
import { Hero } from './models/hero';
import { Component, OnInit } from '@angular/core';
import * as fromHeroes from './reducers';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Observable<Hero[]>;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }
  constructor(private heroService: HeroService, private router: Router, private store: Store<fromHeroes.State>) { }

  getHeroes(): void {
    this.heroes = this.store.select(fromHeroes.getHeroesList);

    this.store.dispatch(new LoadHeroes());

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.store.dispatch(new SelectHero(this.selectedHero));
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    const newhero: Hero = new Hero.name[name];
    this.store.dispatch(new CreateHero(newhero));
  }

  delete(hero: Hero): void {
    this.store.dispatch(new DeleteHero(hero));
  }
}

