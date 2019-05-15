import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {IMovie} from "../../app/Interface.service";
import {FavoriteMovieProvider} from "../../providers/favorite-movie/favorite-movie";

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {
  pokemon : any;
  favorite: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private favoriteMovieProvider: FavoriteMovieProvider
  ) {}

  ionViewDidLoad() {
    this.pokemon = this.navParams.data;
    console.log(this.pokemon.sprites.large)
   /* this.favoriteMovieProvider
      .isFavoriteMovie(this.movie)
      .then(value => (this.favorite = value));*/
  }

toggleFavorite(): void {
    this.favorite = !this.favorite;
    this.favoriteMovieProvider.toogleFavoriteMovie(this.pokemon);

}
}
