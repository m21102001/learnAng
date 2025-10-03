import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  friends = ['Ali', 'Omar', 'Sara', 'Mona'];
  isActive: boolean = true
  value: number = 13
}
