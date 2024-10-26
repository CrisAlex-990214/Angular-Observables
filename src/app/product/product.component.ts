import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { EditProductComponent } from "../edit-product/edit-product.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardModule, CurrencyPipe, RouterLink, CarouselModule, RouterOutlet, EditProductComponent],
  templateUrl: './product.component.html',
  styles: `p-card:hover { opacity: 0.6 }`
})
export class ProductComponent {

  products = [
    { id: 1, imageUrl: 'https://attic.sh/zq1ggg8imuewx694xjheo8h4wrw9', name: 'Red Jacket', price: 45.02 },
    { id: 2, imageUrl: 'https://attic.sh/jogt4ezmwjkkdoxgyjlp8ugwpqa9', name: 'Gray Shoes', price: 58.63 },
    { id: 3, imageUrl: 'https://attic.sh/x1zi57blpxrtf1gyu5y70ryqucpc', name: 'Purple T-shirt', price: 78.45 }
  ];

}
