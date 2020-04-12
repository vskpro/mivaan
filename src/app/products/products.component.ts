import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public categories: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    $(document).ready(() => {
      $('#navbar').removeClass('home');
    });
    this.productService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
