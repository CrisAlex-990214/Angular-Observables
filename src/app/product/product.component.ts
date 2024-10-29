import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { EditProductComponent } from "../edit-product/edit-product.component";
import { Product } from '../product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardModule, CurrencyPipe, RouterLink, CarouselModule, RouterOutlet, EditProductComponent],
  templateUrl: './product.component.html',
  styles: `p-card:hover { opacity: 0.6 }`
})
export class ProductComponent {

  http = inject(HttpClient);
  selectedProduct!: Product | undefined;

  products$ = this.http.get<Product[]>('api/products');

  refreshList() {
    this.products$ = this.http.get<Product[]>('api/products');
  }
}
