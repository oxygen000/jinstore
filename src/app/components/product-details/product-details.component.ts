import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../servers/product.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  suggestedProducts: any[] = [];
  additionalProduct: any;
  combinedProductData: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      if (productId) {
        this.fetchProductData(Number(productId));
      }
    });
  }

  private fetchProductData(productId: number): void {
    this.product = this.productService.getProductById(productId);

    if (this.product) {
      this.suggestedProducts =
        this.productService.getSuggestedProducts(productId);
    }

    this.additionalProduct = this.productService.getProductById(productId);

    this.combineProductData();
  }

  private combineProductData(): void {
    if (this.product && this.additionalProduct) {
      this.combinedProductData = {
        ...this.product,
        additionalData: this.additionalProduct,
      };
    }
  }
}
