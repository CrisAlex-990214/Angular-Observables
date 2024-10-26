import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styles: ``
})
export class EditProductComponent {
  form!: FormGroup;

  fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      name: [],
      price: [],
    });
  }
}
