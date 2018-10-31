
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MovieType} from './movie'
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MoviebackService {

  url = "/api/v1/movie";
  delurl ="/api/v1";
  

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any> {
    return this.httpClient.get(this.url);
  }
  addMovie(movie): Observable<any> {
    
    return this.httpClient.post(this.url,movie, httpOptions);
  }
  deleteMovie(movie):Observable<any>{
 
   return this.httpClient.patch(this.url,movie,httpOptions);
  }
  updateMovie(movie): Observable<any> {
    return this.httpClient.put(this.url,movie,httpOptions);

  }

}
