import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-image-page',
  templateUrl: './image-page.component.html',
  styleUrl: './image-page.component.css'
})
export class ImagePageComponent implements OnInit{
  id: number;
  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.route.params.subscribe((params:Params) => {this.id = params['id'];});
  }

  
  

}
