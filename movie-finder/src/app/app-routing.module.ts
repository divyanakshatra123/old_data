import { DeleteComponent } from './delete/delete.component';
import { NgModule,Component } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { WishlistComponent} from './wishlist/wishlist.component'



const routes:Routes =[
    { path: '', component: HomeComponent },
  { path: 'movie/:movieID', component: MovieComponent },
  {path : 'wishlist',component:WishlistComponent}
]

@NgModule(
    {
        declarations:[],
        imports:[
            RouterModule.forRoot(routes)
        ], 
        providers:[],
        bootstrap:[],
        exports:[RouterModule]
    }
)
export class ApproutingModule{

}
export const routingComponent =[HomeComponent,MovieComponent,WishlistComponent,DeleteComponent]