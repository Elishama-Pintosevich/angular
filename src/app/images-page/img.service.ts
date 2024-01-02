
import { EventEmitter, Injectable } from "@angular/core";
import { Image } from "./list-images/image.model";
import {LoggingService} from "./logging.service"

@Injectable()
export class ImgService{
    public images: Image[] = []
    constructor(private loggingService: LoggingService){}
    public addImg(img: Image){
        this.loggingService.log(img)
        this.images.push(img)
      }
    // imgData = new EventEmitter<Image>()  
}