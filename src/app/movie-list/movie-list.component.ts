import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movie = {
    "name":"The God Father",
    "genre":"Drama",
    "price":12.99,
    "disponible":"Yes",
    "image":"assets/img/el-padrino.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
