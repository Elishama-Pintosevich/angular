import { Component, OnInit } from '@angular/core';
import { Image } from '../list-images/image.model';
import { ImgService } from '../img.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Post } from './post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
})
export class InputsComponent implements OnInit {
  name: string
  description: string
  url: string 
  loaded: Post[] = []
  constructor(private imgService: ImgService, private http: HttpClient, private postService: PostService ){}

  ngOnInit(): void {
    this.postService.fetchPosts().subscribe(data => this.loaded = data)
  }
  public submit() {
    console.log("click");
    this.imgService.addImg(new Image(this.name, this.description, this.url))

    // this.imgService.imgData.emit(new Image(this.name, this.description, this.url))
    
    this.postService.createAndStorePost(this.name, this.description, this.url)
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    // //http.request post request 
    // // const body = JSON.stringify(this.name)
    // // console.log(body);
    // const body: Image = new Image(this.name, this.description, this.url)
    // this.http.post("http://localhost:5079/WeatherForecast", body, {headers}).subscribe((res)=> {console.log(res)}
    // )
    
    

  }
  onFetchPost(){
     this.postService.fetchPosts()
  }
  // private fetchData(){
    // this.http.get<{[key: string]: Post}>("http://localhost:5079/WeatherForecast")
    // .pipe(map(response => {
    //   const arr: Post[] = []
    //   for (const key in response){
    //     console.log(key);
    //     arr.push({...response[key]})
    //   }
    //   return arr
    // }))
    // .subscribe(data => {
    //   this.loaded = data
    // })
  // }
    

}
