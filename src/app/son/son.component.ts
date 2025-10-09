import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent {
  @Output() sendToFather = new EventEmitter<string>()

  sendMessage(){
    this.sendToFather.emit("hello father from son")
  }
  
}
