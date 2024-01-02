import { Component, OnInit } from '@angular/core';
import { Image } from './list-images/image.model';
import {LoggingService} from './logging.service'
import { ImgService } from './img.service';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrl: './images-page.component.css',
})
export class ImagesPageComponent implements OnInit{
  public images: Image[] = []
  
  constructor(private imgService: ImgService){
    // this.imgService.imgData.subscribe(
    //   (img: Image)=>{alert(`data: ${img.name} ${img.description}`)}
    // )
  }
  ngOnInit(): void {
    this.images = this.imgService.images
  }

}
