import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemonList/pokemonList.component';
import { PokemonDetailComponent } from './components/pokemonDetail/pokemonDetail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PokedexPageComponent } from './pages/pokedexPage/pokedexPage.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonDetailComponent, PokedexPageComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
