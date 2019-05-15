import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import {IMovie} from "../../app/Interface.service";

const MOVIE_KEY = "movie_";

@Injectable()
export class FavoriteMovieProvider {
  constructor(private storage: Storage) {
    console.log("Hello UserPreferencesProvider Provider");
  }

  addFavoriteMovie(pokemon) {
    this.storage.set(this.getMovieKey(pokemon), JSON.stringify(pokemon));
  }

  removeFavoriteMovie(pokemon) {
    this.storage.remove(this.getMovieKey(pokemon));
  }

  isFavoriteMovie(pokemon) {
    return this.storage.get(this.getMovieKey(pokemon));
  }

  toogleFavoriteMovie(pokemon) {
    this.isFavoriteMovie(pokemon).then(
      isFavorite =>
        isFavorite
          ? this.removeFavoriteMovie(pokemon)
          : this.addFavoriteMovie(pokemon)
    );
  }

  getMovieKey(pokemon) {
    return MOVIE_KEY + pokemon.Number.toString();
}8

  getFavoriteMovies(): Promise<IMovie[]> {
    return new Promise(resolve => {
      let results: IMovie[] = [];
      this.storage
        .keys()
        .then(keys =>
          keys
            .filter(key => key.includes(MOVIE_KEY))
            .forEach(key =>
              this.storage.get(key).then(data => results.push(JSON.parse(data)))
            )
        );
      return resolve(results);
    });
  }
}
