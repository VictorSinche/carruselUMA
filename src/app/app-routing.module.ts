import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselumaComponent } from './pages/carruseluma/carruseluma.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'carrucel', component: CarruselumaComponent },
      { path: '', redirectTo: 'carrucel', pathMatch: 'full' } // Redirige a Dashboard por defecto
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
