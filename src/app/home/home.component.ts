import { Component, OnInit } from '@angular/core';
import { ProductService } from 'product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any[] = [];

  constructor(private _productsService: ProductService) { }

  ngOnInit(): void {
    this._productsService.getPosts().subscribe({
      next: (data) => {
        this.posts = data.slice(0, 10); // أول 10 بس
        console.log(data);
      },
    });
  }

  getAllPosts() {
    this._productsService.getPosts().subscribe({
      next: (data) => {
        this.posts = data; // الكل من غير slice
      },
    });
  }
}
