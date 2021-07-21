import { map } from 'rxjs/operators';
import { Product } from './../../models/product.filter';
import { ProductService } from './../../product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  products: Product[];
  filteredProducts: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll().subscribe(p => this.products = this.filteredProducts = p.map(
      data => {
        console.log(data);
        return data.payload.val();
      }));
  }

  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products :
      this.products;
  }

  ngOnInit(): void {
  }

}
