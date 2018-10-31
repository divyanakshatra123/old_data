import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { MoviebackService} from './../movieback.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  upcoming_movies: any;
  search_result: any;
  movie: any;
  movielist=[];

  constructor(public movieService:MovieService,public movieback:MoviebackService) { 

    this.movieService.getUpcomingMovies().subscribe(data =>{this.upcoming_movies= data['results']})
    
  }
  searchMovies()
  {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
      // console.log(this.search_result);
    });

  }
  addtowishlist(upcoming)
  {
    
    var m={
      "id" : upcoming.id,
      "name" : upcoming.original_title ,
      "summary" : upcoming.overview,
     "url" : upcoming.poster_path,
     "comment":""

    } 
    this.movieback.addMovie(m).subscribe(data => {
      console.log("successfully added");

    })
  }

  ngOnInit() {
  }

}
