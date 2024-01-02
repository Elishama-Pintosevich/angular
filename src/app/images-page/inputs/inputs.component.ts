import { Component } from '@angular/core';
import { Image } from '../list-images/image.model';
import { ImgService } from '../img.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
})
export class InputsComponent  {
  name: string
  description: string
  url: string 
  constructor(private imgService: ImgService ){}

  public submit() {
    console.log("click");
    this.imgService.addImg(new Image(this.name, this.description, this.url))
    // this.imgService.imgData.emit(new Image(this.name, this.description, this.url))
  }
    

}
