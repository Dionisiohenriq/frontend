import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0,
  };
  constructor(private productService: ProductService, private router: Router) {}
  cancel() {
    this.router.navigate(['/product']);
  }
  ngOnInit(): void {}

  createProduct() {
    this.productService.createProduto(this.product).subscribe(() => {
      this.productService.showMessage('Operação criada com sucesso!');
      this.router.navigate(['/product']);
    });
  }
}
