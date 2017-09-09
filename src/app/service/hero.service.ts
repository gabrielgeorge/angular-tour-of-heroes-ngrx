import 'rxjs/add/operator/toPromise';

import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';

import { Hero } from './../models/hero';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes/';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getDashboardHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map(res => res.json().data);
  }

  getHeros(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map(res => res.json().data);
  }

  selectHero(id: number): Observable<Hero> {
    return this.http
      .get(this.heroesUrl + id)
      .map(res => res.json());
  }

  updateHero(hero: Hero) {
    return this.http
      .put(this.heroesUrl + hero.id, hero)
      .map(res => res.json());
  }

  createHero(hero: Hero) {
    return this.http
      .post(this.heroesUrl, hero)
      .map(res => res.json());

  }

  deleteHero(heroId: { id: number }) {
    return this.http
      .delete(this.heroesUrl + heroId)
      .map(res => heroId);
  }

  searchHero(term: string): Observable<Hero[]> {
    return this.http
      .get(this.heroesUrl + `?name=${term}`)
      .map(res => res.json());
  }
}
