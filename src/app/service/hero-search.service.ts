import { Hero } from './../models/hero';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HeroSearchService {
    constructor(private http: Http) { }

    search(term: string): Observable<Hero[]> {
        return this.http
        .get(`api/heroes/?name=${term}`)
        .map(res => res.json().data as Hero[]);
    }
}
