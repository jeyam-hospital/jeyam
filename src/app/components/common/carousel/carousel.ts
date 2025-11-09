
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
   @Input() images: string[] = []; // Use string[] instead of any
  @Input() autoPlay: boolean = true;
  @Input() interval: number = 4000;
  @Input() showIndicators: boolean = true;
  @Input() showNavigation: boolean = true;

  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  currentIndex = 0;
  private autoPlayInterval: any;
  private touchStartX = 0;
  private touchEndX = 0;
  private swipeThreshold = 50;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.autoPlay && this.images?.length > 1) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  next() {
    if (!this.images || this.images.length === 0) return;
    
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.resetAutoPlay();
  }

  prev() {
    if (!this.images || this.images.length === 0) return;
    
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.resetAutoPlay();
  }

  goToSlide(index: number) {
    if (!this.images || index < 0 || index >= this.images.length) return;
    
    this.currentIndex = index;
    this.resetAutoPlay();
  }

  // Touch events for mobile swipe
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.stopAutoPlay();
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {
    this.handleSwipe();
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  private handleSwipe() {
    const diff = this.touchStartX - this.touchEndX;
    
    // Swipe left - next slide
    if (diff > this.swipeThreshold) {
      this.next();
    }
    // Swipe right - previous slide
    else if (diff < -this.swipeThreshold) {
      this.prev();
    }
  }

  private startAutoPlay() {
    if (!this.images || this.images.length <= 1) return;
    
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.interval);
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  private resetAutoPlay() {
    if (this.autoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  // Add trackBy function for better performance
  trackByFn(index: number, item: string): number {
    return index;
  }

  handleImageError(event: Event) {
  const imgElement = event.target as HTMLImageElement;
  console.warn('Image failed to load:', imgElement.src);
  // Optional: Set a fallback image or hide the broken image
  imgElement.style.display = 'none';
}
}