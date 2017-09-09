import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroEffects } from './effects/heroes.effects';
import { HeroDetailComponent } from './hero-detail.compopnent';
import { HeroSearchComponent } from './hero-search.component';
import { HeroesComponent } from './heroes.component';
import * as fromHeros from './reducers';
import { HERO_FEATURENAME } from './reducers';
import { metaReducers, reducers } from './reducers/root.reducer';
import { HeroService } from './service/hero.service';
import { InMemoryDataService } from './service/in-memory-data.service';

// Imports for loading & configuring the in-memory web api
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),

    StoreModule.forFeature(HERO_FEATURENAME, fromHeros.reducers),
    EffectsModule.forFeature([HeroEffects])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
