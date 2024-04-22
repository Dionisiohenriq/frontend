import { CurrencyPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatListItem } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ProductReadDataSource } from './product-read-datasource';

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [
    MatListItem,
    NgFor,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterLink,
    CurrencyPipe,
  ],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css',
})
export class ProductReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'actions'];
  dataSource = new ProductReadDataSource();
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
