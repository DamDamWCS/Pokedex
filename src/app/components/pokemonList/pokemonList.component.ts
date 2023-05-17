import { Component, Input, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/shared/services/PokedexService/pokedex.service';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemonList',
  templateUrl: './pokemonList.component.html',
  styleUrls: ['./pokemonList.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  constructor( public PokedexService: PokedexService ) {}

  ngOnInit(): void {
    this.PokedexService.getPokemon().subscribe(dataPokemons => {
      this.pokemons = dataPokemons;
      console.log(this.pokemons)
    });

  }

}
