import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styles: ``
})
export class EditProductComponent implements OnInit, OnChanges {
  form!: FormGroup;

  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  http = inject(HttpClient);
  router = inject(Router);

  @Input() product!: Product;
  @Output() updatedProduct = new EventEmitter();

  constructor() {
    this.form = this.fb.group({
      name: [],
      price: [],
    });
  }

  ngOnInit(): void {
    // this.route.params.subscribe(async p => {
    //   const id = p['id'];

    //   this.product = await lastValueFrom(this.http.get<Product>(`api/products/${id}`));

    //   this.form.patchValue({ name: this.product.name, price: this.product.price });
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.patchValue({ name: this.product.name, price: this.product.price });
  }

  updateProduct() {
    this.product.name = this.form.controls['name'].value;
    this.product.price = this.form.controls['price'].value;

    this.http.put<Product>(`api/products/${this.product.id}`, this.product)
      .subscribe(() => {
        // this.router.navigateByUrl('products');
        this.updatedProduct.emit();
      })
  }
}
