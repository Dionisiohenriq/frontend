import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {}
  baseUrl = 'http://localhost:3000/products';
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
  createProduto(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product).pipe(
      map((res) => res),
      catchError((err) => this.errorHandler(err))
    );
  }
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl).pipe(
      map((res) => res),
      catchError((err) => this.errorHandler(err))
    );
  }
  getProductById(id?: number): Observable<Product> {
    const url = `${this.baseUrl}/${id?.toString()}`;
    return this.httpClient.get<Product>(url).pipe(
      map((res) => res),
      catchError((err) => this.errorHandler(err))
    );
  }
  updateProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id?.toString()}`;
    return this.httpClient.put<Product>(url, product).pipe(
      map((res) => res),
      catchError((err) => this.errorHandler(err))
    );
  }
  deleteProduct(id?: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete<Product>(url).pipe(
      map((res) => res),
      catchError((err) => this.errorHandler(err))
    );
  }
  errorHandler(e: any): Observable<any> {
    console.log('Erro: ' + e);
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
