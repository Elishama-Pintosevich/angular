import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Image } from "./list-images/image.model";
import {map} from 'rxjs/operators'
import { Post } from "./inputs/post.model";

@Injectable({ providedIn: 'root'})
export class PostService{

    constructor(private http: HttpClient){}

    createAndStorePost(name: string, description: string, url: string){
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
          //http.request post request 
          // const body = JSON.stringify(this.name)
          // console.log(body);
          const body: Image = new Image(name, description, url)
          this.http.post("http://localhost:5079/WeatherForecast", body, {headers}).subscribe((res)=> {console.log(res)}
          )

    }
    fetchPosts(){
        return this.http.get<{[key: string]: Post}>("http://localhost:5079/WeatherForecast")
        .pipe(map(response => {
        const arr: Post[] = []
        for (const key in response){
            console.log(key);
            arr.push({...response[key]})
        }
        return arr
        }))
        
    }

}