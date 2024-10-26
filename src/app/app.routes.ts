import { Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    {
        path: 'products', component: ProductComponent,
        children: [{ path: ':id', component: EditProductComponent }]
    }
];
