import { routingComponent,ApproutingModule} from './app-routing.module';
import { MovieService } from './movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import{ MoviebackService } from './movieback.service';







@NgModule({
  declarations: [
    AppComponent,
    
    routingComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
   ApproutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
    
  ],
  providers: [MovieService,MoviebackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
