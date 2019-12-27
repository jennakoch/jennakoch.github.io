import { Component, OnInit} from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { ActivatedRoute, Router,  NavigationEnd } from '@angular/router';
import { Individual } from '../individual';
import { Ability } from '../ability';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  public individual: Individual[];
  ability: Ability[];
  name: string;
  abilityIds: string[] = [];
  newPokemon: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokedexService: PokedexService,
  ) {
    // prevent route reload whenever params change;
    this.router.routeReuseStrategy.shouldReuseRoute = () => true;
   }

  ngOnInit() {

    this.route.queryParams.subscribe(queryParams => {
      this.getIndividual();
      this.getAbility();
      this.checkForAbility();
	  });
    this.route.params.subscribe(routeParams => {
      this.getIndividual();
      this.getAbility();
      this.checkForAbility();
    });
    this.checkUrl(this.route._routerState.snapshot.url);

  }

  getIndividual(){
    const initialId = this.route.url["value"][1].path;
    this.pokedexService.getIndividual(initialId)
      .subscribe(Individual => {
        this.individual = Individual;
      });
    this.router.events.subscribe(
      (event) => {
          if (event instanceof NavigationEnd)
          {
            const id = +this.route.snapshot.paramMap.get('id');
            this.pokedexService.getIndividual(id)
              .subscribe(Individual => {
                this.individual = Individual;
              });
          }
      });
      this.getAbility();
  }

  getAbility(){
    const abilityId = this.route.url["value"][3].path;
    this.pokedexService.getAbilityById(abilityId)
      .subscribe(Ability => {
        this.ability = Ability;
      });
    this.router.events.subscribe(
      (event) => {
          if (event instanceof NavigationEnd)
          {
            const id = +this.route.snapshot.paramMap.get('abId');
            this.pokedexService.getAbilityById(id)
              .subscribe(Ability => {
                this.ability = Ability;
              });
          }
      });
    
  }

  checkForAbility(){
    this.router.events.subscribe(
      (event) =>
      {
        if (event instanceof NavigationEnd)
          {
            const url = event.urlAfterRedirects;
            this.checkUrl(url);
          }
      }
    )
    
  }


  checkUrl(url){
    if(url.includes("ability")){
      this.newPokemon = true;
      this.getAbility();
    }else{
      this.newPokemon = false;
    }
  }

}
