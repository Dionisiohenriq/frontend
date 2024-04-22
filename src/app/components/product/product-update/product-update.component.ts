import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomCurrencyPipePipe } from '../../../pipes/custom-currency-pipe.pipe';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    CustomCurrencyPipePipe,
  ],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css',
})
export class ProductUpdateComponent implements OnInit {
  product: Product = new (class implements Product {
    name: string = '';
    price: string = '';
  })();

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')?.toString();
      this.productService.getProductById(id).subscribe((product) => {
        this.product = product;
      });
    });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.productService.showMessage('Product updated successfully!');
      this.router.navigate(['/product']);
    });
  }
  cancel(): void {
    this.router.navigate(['/product']);
  }
}
