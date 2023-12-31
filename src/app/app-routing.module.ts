import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { ImagesPageComponent } from './images-page/images-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'images', component:  ImagesPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
