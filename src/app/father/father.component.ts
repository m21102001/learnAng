import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent {
  // messageFromSon: string = "";

  // handleSonMessage(event: string) {
  //   this.messageFromSon = event;
  //   console.log("Received from son:", event);
  // }
  // parentMessage: string = 'Hello from parent';
  message: string = 'Hello from parent';
  showChild = true;

  changeMessage() {
    this.message = 'Parent message changed!';
  }

  toggleChild() {
    this.showChild = !this.showChild;
  }
}
