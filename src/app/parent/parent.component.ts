import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public toys: string[] = ['playstation', 'xbox']

  public funCounter: number = 0
  public onChildHavingFun(counter: number) {
    this.funCounter += counter
  }
  parentValue = 'Hello from Parent';
  msg: string = 'msg'
  handleChildMessage(event: string) {
    this.msg = event;
    console.log('Received from child:', event);
  }
}
