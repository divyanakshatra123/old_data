import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie :any;
  movieid:any;

  constructor(private router:Router,private route:ActivatedRoute,private movieService:MovieService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.movieid = params['movieID']
      this.movieService.getMovie(this.movieid).subscribe(data =>
        { this.movie = data})
    })
  }
    
}
