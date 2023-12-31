import { Component, Input } from '@angular/core';
import { Image } from '../image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  @Input("img") image: Image;
  name: string
  description: string
  url: string


}
