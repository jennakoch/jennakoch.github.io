import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd, RouterLink } from '@angular/router';
import { Individual } from '../individual';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  individual: Individual[];
  name: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokedexService: PokedexService,
  ) {
    // force route reload whenever params change;
    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit() {

    this.route.queryParams.subscribe(queryParams => {
      this.getIndividual();
	  });
    this.route.params.subscribe(routeParams => {
      this.getIndividual();
    });
    
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
  }

}
