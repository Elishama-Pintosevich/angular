import { Component } from '@angular/core';
import { Image } from './list-images/image.model';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrl: './images-page.component.css'
})
export class ImagesPageComponent {
  public images: Image[] = []
  public onInput(img: Image){
    console.log(img);
    this.images.push(img)
  }

}
