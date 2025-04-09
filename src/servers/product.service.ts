import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  qty: number;
  qtyTotal: number;
  totalQty: number;
  image: string;
  layout: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      oldPrice: 1000,
      newPrice: 800,
      discount: 20,
      qty: 0,
      qtyTotal: 8,
      totalQty: 1,
      image: './itmes/itam1.png',
      layout: 'single',
    },
    {
      id: 2,
      name: 'Product 2',
      oldPrice: 1200,
      newPrice: 1000,
      discount: 15,
      qty: 0,
      qtyTotal: 8,
      totalQty: 2,
      image: './itmes/itam2.png',
      layout: 'double',
    },
    {     
      id: 3,
      name: 'Product 3',
      oldPrice: 1500,
      newPrice: 1125,
      discount: 25,
      qty: 0,
      qtyTotal: 8,
      totalQty: 3,
      image: './itmes/itam3.png',
      layout: 'double',
    },
    {
      id: 4,
      name: 'Product 4',
      oldPrice: 1000,
      newPrice: 800,
      discount: 20,
      qty: 0,
      qtyTotal: 8,
      totalQty: 4,
      image: './itmes/itam4.png',
      layout: 'single',
    },
    {
      id: 5,
      name: 'Product 5',
      oldPrice: 1200,
      newPrice: 1000,
      discount: 15,
      qty: 0,
      qtyTotal: 8,
      totalQty: 5,
      image: './itmes/itam5.png',
      layout: 'double',
    },
    {
      id: 6,
      name: 'Product 6',
      oldPrice: 1500,
      newPrice: 1125,
      discount: 25,
      qty: 0,
      qtyTotal: 8,
      totalQty: 6,
      image: './itmes/itam6.png',
      layout: 'double',
    },
    {
      id: 7,
      name: 'Product 7',
      oldPrice: 1000,
      newPrice: 800,
      discount: 20,
      qty: 0,
      qtyTotal: 8,
      totalQty: 1,
      image: './itmes/itam7.png',
      layout: 'single',
    },
    {
      id: 8,
      name: 'Product 8',
      oldPrice: 1200,
      newPrice: 1000,
      discount: 15,
      qty: 0,
      qtyTotal: 8,
      totalQty: 2,
      image: './itmes/itam8.png',
      layout: 'double',
    },
    {
      id: 9,
      name: 'Product 9',
      oldPrice: 1500,
      newPrice: 1125,
      discount: 25,
      qty: 0,
      qtyTotal: 8,
      totalQty: 3,
      image: './itmes/itam9.png',
      layout: 'double',
    },
    {
      id: 10,
      name: 'Product 10',
      oldPrice: 1000,
      newPrice: 800,
      discount: 20,
      qty: 0,
      qtyTotal: 8,
      totalQty: 4,
      image: './itmes/itam10.png',
      layout: 'single',
    },
    {
      id: 11,
      name: 'Product 11',
      oldPrice: 1200,
      newPrice: 1000,
      discount: 15,
      qty: 0,
      qtyTotal: 8,
      totalQty: 5,
      image: './itmes/itam11.png',
      layout: 'double',
    },
    {
      id: 12,
      name: 'Product 12',
      oldPrice: 1500,
      newPrice: 1125,
      discount: 25,
      qty: 0,
      qtyTotal: 8,
      totalQty: 6,
      image: './itmes/itam12.png',
      layout: 'double',
    },
  ];




  getAllProducts(): Product[] {
    return [...this.products ];
  }

  getFirstPartProducts(limit: number): Product[] {
    return this.products.slice(0, limit);
  }



  getProductById(id: number) {
    return [...this.products].find((product) => product.id === id);
  }

  getSuggestedProducts(currentProductId: number) {
    return [...this.products].filter((product) => product.id !== currentProductId);
  }
}
