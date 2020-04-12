import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public categories: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {

    $(document).ready(() => {
      $('#navbar').addClass('home');
    });

    this.productService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
