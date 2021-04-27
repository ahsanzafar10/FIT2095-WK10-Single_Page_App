import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-actor2movie',
  templateUrl: './actor2movie.component.html',
  styleUrls: ['./actor2movie.component.css']
})
export class Actor2movieComponent implements OnInit {

  actorsDB: any[] = [];
  moviesDB: any[] = [];
  moviesObj = null;
  actorsObj = null;

  constructor(private dbService: DatabaseService, private router: Router) {}

  ngOnInit(): void {
    this.onGetActors();
    this.OnGetMovies();
  }

  onGetActors() {
    this.dbService.getActors().subscribe((result: any[]) => {
      this.actorsDB = result;
    });
  }

  OnSelectUpdateActorSelection(item) {
    this.actorsObj = item;
  }

  OnGetMovies() {
    this.dbService.getMovies().subscribe( (result: any[]) => {
      this.moviesDB = result;
    });
  }

  OnSelectUpdateMovieSelection(item) {
    this.moviesObj = item;
  }

  onAddActor2Movie() {
    console.log(this.moviesObj._id);
    let payload = {id : this.actorsObj._id};
    console.log(payload);
    this.dbService.addActortoMovie(this.moviesObj._id, payload).subscribe(result => {

    })
  }

}
