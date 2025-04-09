import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface List {
  image: string;
  title: string;
}

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  list: List[] = [
    {
      image: './catgrag/catgry1.png',
      title: 'Fruits & Vegetables',
    },
    {
      image: './catgrag/catgry2.png',
      title: 'Baby & Pregnancy',
    },
    {
      image: './catgrag/catgry3.png',
      title: 'Beverages',
    },
    {
      image: './catgrag/catgry4.png',
      title: 'Meats & Seafood',
    },
    {
      image: './catgrag/catgry5.png',
      title: 'Biscuits & Snacks',
    },
    {
      image: './catgrag/catgry6.png',
      title: 'Breaksfast & Dairy',
    },
    {
      image: './catgrag/catgry7.png',
      title: 'Frozen Foods',
    },
    {
      image: './catgrag/catgry8.png',
      title: 'Grocery & Staples',
    },
  ];
}
