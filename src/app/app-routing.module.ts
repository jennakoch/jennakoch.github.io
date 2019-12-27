import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/pokemon/1', pathMatch: 'full' },
  { path: 'pokemon/:id', component: DashboardComponent },
  { path: 'pokemon/:id/ability/:abId', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
