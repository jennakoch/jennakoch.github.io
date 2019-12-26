import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokedexService } from '../pokedex.service';
import { PokemonFiltered } from '../pokemonFiltered';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon[] = [];
  pokemonFiltered: PokemonFiltered[] = [];
  isLoading: boolean = false;
  error: boolean = false;
  nextPage: string;
  sticky: boolean = false;
  elementPosition: any;
  pokemonType: string;

  @ViewChild('stickyMenu', {static:true}) menuElement: ElementRef;

  constructor(
    private pokedexService: PokedexService
    ) { }
  ngOnInit() {
    this.getTotal();
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }

  getPokemans(limit) {
       this.pokedexService.getPokemons(limit)
      .subscribe(pokemon => {
        this.pokemon = pokemon;
      }
      );
  }

  getTotal()
  {
    this.pokedexService.getTotal()
    .subscribe(getTotal => {
      this.getTotal = getTotal;
    }, err =>
    {},() =>{
      this.getPokemans(this.getTotal);
    });
  }

  getByType(typeName)
  {
    this.pokemonType = typeName;
    this.pokedexService.getPokemonByType(typeName)
      .subscribe(pokemonFiltered => {
        this.pokemonFiltered = pokemonFiltered;
      }
      );
  }

  clearFilter(){
    this.pokemonFiltered = [];
    this.pokemonType = "";
  }

 

}
