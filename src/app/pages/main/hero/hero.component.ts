import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  oldPrice: string;
}

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})

export class HeroComponent {
  currentSlideIndex: number = 0;
  
  slides: Slide[] = [
    {
      image: './img/hero.png',
      title: 'Weekend Discount',
      subtitle: 'Shopping with us for better quality and the best price',
      description: 'We have prepared special discounts for you on grocery products. Don\'t miss these opportunities...',
      price: '$21.67',
      oldPrice: '$26.67'
    },
    {
      image: './img/hero2.png',
      title: 'Flash Sale',
      subtitle: 'Huge discounts on your favorite brands',
      description: 'Limited time only! Don\'t miss the chance to save big on daily essentials.',
      price: '$12.49',
      oldPrice: '$18.99'
    },
    {
      image: './img/hero3.png',
      title: 'New Arrivals',
      subtitle: 'Explore the latest products in store',
      description: 'Freshly stocked and ready for you. Get yours before they’re gone!',
      price: '$34.99',
      oldPrice: '$39.99'
    }
  ];

  // الانتقال إلى الشريحة التالية
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  // الانتقال إلى الشريحة السابقة
  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}