import { Image } from "./list-images/image.model";

export class LoggingService{
    public log(img: Image){
        console.log(`data of inputs name: ${img.name}, desc: ${img.description}, url: ${img.url},`);
    }
}