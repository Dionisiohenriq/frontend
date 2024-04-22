import { Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'product', component: ProductCrudComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/update/:id', component: ProductUpdateComponent },
  { path: 'product/delete/:id', component: ProductDeleteComponent },
];
