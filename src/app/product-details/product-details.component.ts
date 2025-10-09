import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'product.service';
import { Product } from 'src/models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ProductDetails: Product | undefined
  productId: string = ''
  constructor(
    private _productServices: ProductService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productId = this._route.snapshot.params['id']
    console.log(this.productId);
    this.getProduct()
  }
  getProduct() {
    this._productServices.getProduct(this.productId).subscribe({
      next: data => {
        this.ProductDetails = data
        console.log(this.ProductDetails);

      },
      error: err => console.log(err)

    })
  }
}
