import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carruseluma',
  standalone: false,
  templateUrl: './carruseluma.component.html',
  styleUrl: './carruseluma.component.css'
})
export class CarruselumaComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;
  currentIndex = 0;
  intervalId: any;

  ngAfterViewInit() {
    this.showSlide(); // Mostrar la primera imagen inmediatamente
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 15000); // Avanzar cada 2 segundos
  }

  nextSlide() {
    const slides = this.carousel.nativeElement.children;
    const totalSlides = slides.length;

    if (totalSlides === 0) return;

    // Ocultar el slide actual
    slides[this.currentIndex].classList.remove('active');

    // Avanzar al siguiente índice
    this.currentIndex++;

    // Si llegó al final, saltar inmediatamente al primer slide sin animación
    if (this.currentIndex >= totalSlides) {
      this.currentIndex = 0;
      this.resetTransition();
    }

    // Mostrar el nuevo slide
    slides[this.currentIndex].classList.add('active');
  }

  showSlide() {
    const slides = this.carousel.nativeElement.children;
    if (slides.length > 0) {
      slides[0].classList.add('active');
    }
  }

  resetTransition() {
    // Quitar transición para evitar retraso cuando se regresa al primer slide
    const slides = this.carousel.nativeElement.children;
    for (let slide of slides) {
      slide.style.transition = 'none';
    }

    // Restaurar la transición después de un breve tiempo para no afectar los otros cambios
    setTimeout(() => {
      for (let slide of slides) {
        slide.style.transition = 'opacity 1s ease-in-out';
      }
    }, 50);
  }
}
