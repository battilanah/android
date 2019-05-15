import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import {IMovie} from "../../app/Interface.service";


@Injectable()
export class MovieApiProvider {
  private pokemon: string = "../../assets/api/pokemon.json";


  movies: IMovie[];

  constructor(
    private readonly http: HttpClient,
    private readonly platform: Platform
  ) {
    console.log("Hello MovieApiProvider Provider");
  }

  getMovies() {
    return this.http.get(`${this.pokemon}`, {headers: { 'Content-Type': 'application/json; charset=UTF-8'}});
  }
}
