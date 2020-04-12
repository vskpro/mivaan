import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {

  public products: any;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    $(document).ready(() => {
      $('#navbar').removeClass('home');
    });
    const category = this.route.snapshot.paramMap.get('id');
    this.getProducts(category);
  }

  getProducts(category) {
    this.productService.getProductsByCategory(category)
      .then(products => {
        this.products = products;
        console.log(products);
      })
      .catch(error => {
        console.log(error);
        alert('Failed to get products');
      });
  }

}
