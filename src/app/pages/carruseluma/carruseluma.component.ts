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
    }, 15000); // Cambia cada 15 segundos
  }

  nextSlide() {
    const slides = this.carousel.nativeElement.children;
    const totalSlides = slides.length;

    if (totalSlides === 0) return;

    // Ocultar la imagen actual
    slides[this.currentIndex].classList.remove('active');

    // Avanzar al siguiente índice
    this.currentIndex++;

    // Si llega al final, cambiar inmediatamente al primer slide sin tiempo muerto
    if (this.currentIndex >= totalSlides) {
      this.currentIndex = 0;
      this.forceInstantTransition();
    }

    // Mostrar la nueva imagen
    slides[this.currentIndex].classList.add('active');
  }

  showSlide() {
    const slides = this.carousel.nativeElement.children;
    if (slides.length > 0) {
      slides[0].classList.add('active'); // Mostrar la primera imagen sin retrasos
    }
  }

  forceInstantTransition() {
    const slides = this.carousel.nativeElement.children;

    // 🔹 Aplica la clase 'hidden' para evitar el retraso
    slides[this.currentIndex].classList.add('hidden');

    // 🔹 Después de 50ms, restaura la transición normal
    setTimeout(() => {
        slides[this.currentIndex].classList.remove('hidden');
    }, 20);
}

}
