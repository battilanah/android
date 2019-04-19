import { Injectable } from '@angular/core';

export interface IMovie {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
}
export interface Sprites {
  normal: string;
  large: string;
  animated: string;
}

export interface pokemon {
  national_number: string;
  evolution?: any;
  sprites: Sprites;
  name: string;
  type: string[];
  total: number;
  hp: number;
  attack: number;
  defense: number;
  sp_atk: number;
  sp_def: number;
  speed: number;
}


