import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Pokemon } from './pokemon';
import { Individual } from './individual';
import { Ability } from './ability';


@Injectable()
export class PokedexService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  /**
   * Inject the HTTP service.
   */
  constructor(private http: HttpClient) { }

  /**
   * Method that fetches data from
   * the Pokémon API.
   */
  getPokemons(limit) : Observable<Pokemon[]>{
      return this.http.get<Pokemon[]>(this.baseUrl + "pokemon/?offset=0&limit=" + limit)
      .pipe(map((pokemon: any) => pokemon.results)
      );
  }

  getIndividual(name) : Observable<Individual[]>{
    return this.http.get<Individual[]>(this.baseUrl + 'pokemon/' +name)
    .pipe(map((individual: any) => individual)
    );
  }

  getTotal() {
    return this.http.get<Pokemon[]>(this.baseUrl + 'pokemon/')
    .pipe(map((pokemon: any) => pokemon.count)
    );
  }

  getPokemonByType(typeName)
  {
    return this.http.get<Pokemon[]>(this.baseUrl + 'type/' + typeName)
    .pipe(map((pokemon: any) => pokemon.pokemon)
    );
  }

  getAbilityById(id){
    return this.http.get<Pokemon[]>(this.baseUrl + 'ability/' + id)
    .pipe(map((ability: any) => ability)
    );
  }

}