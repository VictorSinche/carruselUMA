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
    }, 15000); // Cambia cada 2 segundos
  }

  nextSlide() {
    const slides = this.carousel.nativeElement.children;
    const totalSlides = slides.length;

    if (totalSlides === 0) return; // Evitar errores si no hay slides

    // Remover la clase active del slide actual
    slides[this.currentIndex].classList.remove('active');

    // Avanzar al siguiente slide
    this.currentIndex = (this.currentIndex + 1) % totalSlides;

    // Agregar la clase active al nuevo slide
    slides[this.currentIndex].classList.add('active');
  }

  showSlide() {
    const slides = this.carousel.nativeElement.children;
    if (slides.length > 0) {
      slides[0].classList.add('active'); // Mostrar la primera imagen inmediatamente
    }
  }
}
