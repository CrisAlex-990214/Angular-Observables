import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements InMemoryDbService {

  createDb() {
    const products: Product[] = [
      { id: 1, imageUrl: 'https://attic.sh/zq1ggg8imuewx694xjheo8h4wrw9', name: 'Red Jacket', price: 45.02 },
      { id: 2, imageUrl: 'https://attic.sh/jogt4ezmwjkkdoxgyjlp8ugwpqa9', name: 'Gray Shoes', price: 58.63 },
      { id: 3, imageUrl: 'https://attic.sh/x1zi57blpxrtf1gyu5y70ryqucpc', name: 'Purple T-shirt', price: 78.45 },
      { id: 4, imageUrl: 'https://attic.sh/ub261xgg726uws9fgrs8w6qp1yoj', name: 'Pink Sweater', price: 81.47 },
      { id: 5, imageUrl: 'https://attic.sh/amt8kh5acynotxbv68c2cdrt6ds5', name: 'White Trousers', price: 35.32 }
    ];
    return { products };
  }
}
