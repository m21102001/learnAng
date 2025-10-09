import { Component, OnInit } from '@angular/core';
import { ProductService } from 'product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = ''

  constructor(private _productServices: ProductService) { }

  ngOnInit(): void {

    this.getAllProducts()
  }
  getAllProducts() {
    this._productServices.getProducts().subscribe({
      next: (data) => {
        this.products = data


      },
      error: (err) => console.log(err)

    })
  }
  trackByProductId(index: number, product: any): number {
    return product.id;
  }

}
