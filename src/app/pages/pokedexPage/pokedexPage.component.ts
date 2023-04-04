import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/shared/services/PokedexService/pokedex.service';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokedexPage',
  templateUrl: './pokedexPage.component.html',
  styleUrls: ['./pokedexPage.component.css'],
})
export class PokedexPageComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor( public PokedexService: PokedexService ) {}

  ngOnInit(): void {
    this.PokedexService.getPokemon().subscribe(dataPokemons => {
      this.pokemons = dataPokemons;
      console.log(this.pokemons)
    });

  }
}
