import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../servers/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-newproducts',
  imports: [CommonModule, RouterModule],
  templateUrl: './newproducts.component.html',
  styleUrls: ['./newproducts.component.scss']
})
export class NewproductsComponent {
  products: any[] = [];

  increaseQty(product: any) {
    if (product.qty < product.totalQty) {
      product.qty += 1;
    }
  }

  decreaseQty(product: any) {
    if (product.qty > 0) {
      product.qty -= 1;
    }
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // الحصول على جميع المنتجات ثم تصفية المنتجات بدءًا من المنتج رقم 7
    this.products = this.productService.getAllProducts().slice(6); // من المنتج السابع وما بعده
  }

  getAvailabilityGradient(currentQty: number, totalQty: number): string {
    const percentage = (currentQty / totalQty) * 100;
    if (percentage > 60) {
      return '#FFD200';
    } else if (percentage > 30) {
      return 'linear-gradient(to right, #FFD200, #DC2626)';
    } else {
      return '#DC2626';
    }
  }
}
