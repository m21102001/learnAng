import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input()
  public toy: string = ''
  @Output()
  public fun = new EventEmitter<number>()
  public onHaveingFun(): void {
    this.fun.emit(1)
  }
  // pass data form parent to clild
  @Input() valueFromParent: string = ''
  @Input() valueFromDad!:User

  @Output() sendDataToParent = new EventEmitter<string>();

  sayHello() {
    this.sendDataToParent.emit('hi from child event emitter');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
