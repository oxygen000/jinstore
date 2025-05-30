import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../servers/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-editorspack',
  imports: [CommonModule, RouterModule],
  templateUrl: './editorspack.component.html',
  styleUrls: ['./editorspack.component.scss'],
})
export class EditorspackComponent {
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
    // عرض المنتجات من 1 إلى 7 باستخدام slice
    this.products = this.productService.getAllProducts().slice(0, 7); // من المنتج الأول إلى السابع
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
