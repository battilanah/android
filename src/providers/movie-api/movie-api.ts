import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import {IMovie} from "../../app/Interface.service";


@Injectable()
export class MovieApiProvider {
  private baseUrl: string = "../../assets/api/movies.json";

  movies: IMovie[];

  constructor(
    private readonly http: HttpClient,
    private readonly platform: Platform
  ) {
    console.log("Hello MovieApiProvider Provider");
  }

  getMovies() {
    return this.http.get(`${this.baseUrl}`, {headers: { 'Content-Type': 'application/json; charset=UTF-8'}});
  }
}
