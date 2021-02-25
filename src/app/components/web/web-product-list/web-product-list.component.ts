import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-web-product-list',
  templateUrl: './web-product-list.component.html',
  styleUrls: ['./web-product-list.component.css']
})
export class WebProductListComponent implements OnInit {

  @Output()
  productList: Array<Product> = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  filterValue = '';

  getAll() {
    this.productList = this.productService.getAll();
  }

}
