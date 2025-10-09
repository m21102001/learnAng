import { Component } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  toys: string[] = ['playstation', 'xbox']
  passValueToChild: User = {
    id: Math.floor(Math.random() * 1000),
    name: 'ahmed',
    age: 25
  }
  parentValue = 'Hello from Parent';
  msg: string = 'msg'
  funCounter: number = 0
  public onChildHavingFun(counter: number) {
    this.funCounter += counter
  }

  handleChildMessage(event: string) {
    this.msg = event;
    console.log('Received from child:', event);
  }
}
