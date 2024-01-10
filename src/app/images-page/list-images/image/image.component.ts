import { Component, Input } from '@angular/core';
import { Image } from '../image.model';
import { Router } from '@angular/router';

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
  constructor(private router: Router){}

  onClick = () => {
    this.router.navigate(['/images',5])
  }


}
