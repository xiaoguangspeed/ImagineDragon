import { NgModule }          from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { MarvelWorldComponent } from './marvel-world/marvel-world.component';

const routes :Routes = [
  {path:"marvelworld",component:MarvelWorldComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[ RouterModule ]
})


export class AppRoutingModule { }
