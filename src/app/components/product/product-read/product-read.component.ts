import { DataSource } from '@angular/cdk/collections';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [MatListItem, NgFor],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css',
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price'];

  constructor(
    private productService: ProductService,
    private dataSource: DataSource<Product>
  ) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
  }
}
