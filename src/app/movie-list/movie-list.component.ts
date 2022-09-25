import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [
    {
      "name":"The God Father",
      "genre":"Drama",
      "price":15,
      "disponible":true,
      "image":"assets/img/el-padrino.jpg",
      "promotion":false
      },
    {
      "name":"Fight Club",
      "genre":"Drama",
      "price":12,
      "disponible":true,
      "image":"assets/img/el-padrino.jpg",
      "promotion":false
      },
    {
      "name":"Magnolia",
      "genre":"Drama, Comedy",
      "price":10,
      "disponible":false,
      "image":"assets/img/el-padrino.jpg",
      "promotion":false
      },
    {
      "name":"The artist",
      "genre":"Musical",
      "price":16,
      "disponible":true,
      "image":"assets/img/el-padrino.jpg",
      "promotion":true
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
