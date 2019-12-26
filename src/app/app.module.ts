import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';

import {HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { PokedexService } from './pokedex.service';
import { CapitalizePipe } from './capitalize.pipe';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetIdPipe } from './get-id.pipe';
import { ToInchesPipe } from './to-inches.pipe';
import { ToPoundsPipe } from './to-pounds.pipe';
import { FilterNamePipe } from './filter-name.pipe';
import { FilterNameTypePipe } from './filter-name-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    CapitalizePipe,
    PokemonDetailsComponent,
    DashboardComponent,
    GetIdPipe,
    ToInchesPipe,
    ToPoundsPipe,
    FilterNamePipe,
    FilterNameTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
