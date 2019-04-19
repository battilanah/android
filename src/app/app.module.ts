import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MovieDetailPage} from "../pages/movie-detail/movie-detail";
import{MovieListPage} from "../pages/movie-list/movie-list";
import {MyMoviesPage} from "../pages/my-movies/my-movies";
import { MovieApiProvider } from '../providers/movie-api/movie-api';
import { HttpClientModule, HttpHeaders  } from '@angular/common/http';
import {IonicStorageModule} from "@ionic/storage";
import { FavoriteMovieProvider } from '../providers/favorite-movie/favorite-movie';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MovieDetailPage,
    MovieListPage,
    MyMoviesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,

    MovieListPage,
    MovieDetailPage,
    MyMoviesPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieApiProvider,
    FavoriteMovieProvider
  ]
})
export class AppModule {}
