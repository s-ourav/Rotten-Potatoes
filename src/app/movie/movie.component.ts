import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  type = ' ';
  id =' ';
  url=' ';
  movies : any;
  movie : any;
  constructor(private route: ActivatedRoute,private http :HttpClient ) { }

  ngOnInit(): void {
    this.type=this.route.snapshot.params['type'];
    this.id=this.route.snapshot.params['id'];
    if (this.type === 'trending') {
        this.url = "/assets/data/trending-movies.json";
    } else if (this.type === 'theatre') {
        this.url = "/assets/data/theatre-movies.json";
    } else if (this.type === 'popular') {
        this.url = "/assets/data/popular-movies.json";
    }
    this.getMovie();
  }

  getMovie(){
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = -1;
      for(let i=0 ; i< this.movies.length ;i++){
        if(this.movies[i].id==this.id){
          index=i;
          break;
        }
      }
      if(index>-1){
        this.movie = this.movies[index];
      }
      console.log(this.movie);
    })

  }

}
