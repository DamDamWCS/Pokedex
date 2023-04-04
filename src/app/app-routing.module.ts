import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexPageComponent } from './pages/pokedexPage/pokedexPage.component';
import { CreatPokemonPageComponent } from './pages/creatPokemonPage/creatPokemonPage.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexPageComponent
  },
  {
    path: 'creat',
    component: CreatPokemonPageComponent,
  },
  {
    path: '**',
    redirectTo:'',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
