import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  string_1: string = 'about'
  age: number = 123
  imgSource: string = './../../assets/images/404.jpeg'
  active: boolean = true
  sayHello() {
    console.log("hello");
  }
  printConsole(e: KeyboardEvent) {
    const inputFiled = e.target as HTMLInputElement
    console.log(inputFiled.value);

  }
}
