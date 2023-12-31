import { Component, Input } from '@angular/core';
import { Image } from './image.model';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrl: './list-images.component.css'
})
export class ListImagesComponent {
  @Input('img') images: Image[]
  // public images: Image[]

 
 
}
