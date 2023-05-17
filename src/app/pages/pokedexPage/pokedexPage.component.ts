import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokedexPage',
  templateUrl: './pokedexPage.component.html',
  styleUrls: ['./pokedexPage.component.css'],
})
export class PokedexPageComponent implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  constructor( ) {}

  ngOnInit(): void {
  }
}
