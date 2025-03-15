import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carruseluma',
  standalone: false,
  templateUrl: './carruseluma.component.html',
  styleUrl: './carruseluma.component.css'
})
export class CarruselumaComponent {
  @ViewChild('carousel') carousel!: ElementRef;
  currentIndex = 0;
  intervalId: any;

  ngAfterViewInit() {
    this.showSlide(); // Mostrar la primera imagen inmediatamente
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.showSlide();
    }, 15000); // Cambia cada 15 segundos
  }

  showSlide() {
    const slides = this.carousel.nativeElement.children;
    const totalSlides = slides.length;

    // Ocultar todas las imágenes
    for (let i = 0; i < totalSlides; i++) {
      slides[i].classList.add('active');
    }

    // Mostrar la imagen actual
    slides[this.currentIndex].classList.remove('active');

    // Avanzar al siguiente índice
    this.currentIndex = (this.currentIndex + 1) % totalSlides;
  }
}
