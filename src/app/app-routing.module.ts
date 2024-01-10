import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { ImagesPageComponent } from './images-page/images-page.component';
import { ImagePageComponent } from './image-page/image-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'images', component:  ImagesPageComponent},
  { path: 'images/:id', component:  ImagePageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
