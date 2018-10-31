import { Component, OnInit,Input } from '@angular/core';
import { MoviebackService} from './../movieback.service';
import{MovieType} from './../movie';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html'
})
export class DeleteComponent implements OnInit {
delmovie=[];

  constructor(private movie:MoviebackService) { }

  ngOnInit() {
    //  this.movie.getMovies().subscribe(p =>{
    //   this.delmovie =p;
     // })
     this.movie.deleteMovie(this.movieget).subscribe(x=>
      console.log("deletd"))

      
   
   
  }
  @Input() movieget:any;
  


  

// receivedMovie($event)
// {
//   this.movieget= $event
  
//   this.movie.deleteMovie(this.movieget).subscribe(data =>
//     {
//       console.log("deleted")
      
      
//     })

}
