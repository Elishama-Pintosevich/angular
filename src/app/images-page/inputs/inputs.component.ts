import { Component, EventEmitter, Output } from '@angular/core';
import { Image } from '../list-images/image.model';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css'
})
export class InputsComponent {
  name: string
  description: string
  url: string 
  @Output() inputValue = new EventEmitter<Image>();

  public submit() {
    console.log(this.name + " " + this.description + " " + this.url);
    this.inputValue.emit(new Image(this.name, this.description, this.url))
  }
    

}
