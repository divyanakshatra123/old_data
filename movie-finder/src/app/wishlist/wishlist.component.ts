import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MoviebackService} from './../movieback.service';
import {Router} from '@angular/router';
import{MovieType} from './../movie';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
movies=[];
deleteMovie;
  constructor(private moviess:MoviebackService,private router:Router) {
    this.moviess.getMovies().subscribe(p =>{
      this.movies = p;
    })
  }

  
  ngOnInit() {
    this.moviess.getMovies().subscribe(p =>{
      this.movies = p;
    })
  }
  
  updateComment(comment,movie)
  { var m={
    "id" : movie.id,
    "name" : movie.original_title ,
    "summary":movie.overview,
    "comment" : comment,
   "url" :movie.poster_path

  } 

    this.moviess.updateMovie(m).subscribe( com =>
      {console.log("comment updated")}
    )
     location.reload();
  }

  
 delete(movie)
 {
  this.deleteMovie= movie
this.moviess.deleteMovie(movie).subscribe(data =>
  {
    console.log("deleted")
    
  })
location.reload();
  }
}


