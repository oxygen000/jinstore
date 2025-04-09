import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editorspack',
  imports: [CommonModule],
  templateUrl: './editorspack.component.html',
  styleUrl: './editorspack.component.scss'
})
export class EditorspackComponent {
  products = [
    {
      name: 'اسم المنتج 1',
      oldPrice: 1000,
      newPrice: 800,
      discount: 20,
      qty: 1,
      image: 'https://via.placeholder.com/150',
      layout: 'single', // or 'double'
    },
    {
      name: 'اسم المنتج 2',
      oldPrice: 1200,
      newPrice: 1000,
      discount: 15,
      qty: 1,
      image: 'https://via.placeholder.com/150',
      layout: 'double',
    },
    {
      name: 'اسم المنتج 3',
      oldPrice: 1500,
      newPrice: 1125,
      discount: 25,
      qty: 1,
      image: 'https://via.placeholder.com/150',
      layout: 'double',
    },
    {
      name: 'اسم المنتج 4',
      oldPrice: 1000,
      newPrice: 800,
      discount: 20,
      qty: 1,
      image: 'https://via.placeholder.com/150',
      layout: 'single',
    },
    {
      name: 'اسم المنتج 2',
      oldPrice: 1200,
      newPrice: 1000,
      discount: 15,
      qty: 1,
      image: 'https://via.placeholder.com/150',
      layout: 'double',
    },
    {
      name: 'اسم المنتج 3',
      oldPrice: 1500,
      newPrice: 1125,
      discount: 25,
      qty: 1,
      image: 'https://via.placeholder.com/150',
      layout: 'double',
    }
    
  ];

  increaseQty(product: any) {
    product.qty += 1;
  }

  decreaseQty(product: any) {
    if (product.qty > 1) {
      product.qty -= 1;
    }
  }
}
