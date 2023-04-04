import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(public http: HttpClient) { }

  public getPokemon(): Observable<Pokemon[]> {
    const url = `https://pokebuildapi.fr/api/v1/pokemon`;
    return this.http.get<Pokemon[]>(url);
  }
}
