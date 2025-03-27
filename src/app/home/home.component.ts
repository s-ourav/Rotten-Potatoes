import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trendingMovies : any;
  theatreMovies : any;
  popularMovies : any;
  constructor(private http : HttpClient,private router : Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http.get(`${environment.baseUrl}/assets/data/trending-movies.json`)
      .subscribe((movies) => {
        this.trendingMovies = movies;
      });
  }

  getTheatreMovies() {
    this.http.get(`${environment.baseUrl}/assets/data/theatre-movies.json`)
      .subscribe((movies) => {
        this.theatreMovies = movies;
      });
  }

  getPopularMovies() {
    this.http.get(`${environment.baseUrl}/assets/data/popular-movies.json`)
      .subscribe((movies) => {
        this.popularMovies = movies;
      });
  }

  goToMovie(type : String , id : String){
    this.router.navigate(['movie',type,id]);
  }
}
