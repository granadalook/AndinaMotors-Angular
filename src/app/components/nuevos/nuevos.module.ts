import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevosComponent } from './components/nuevos/nuevos.component';
import { nuevosRoutingModule } from './nuevos-routing.module';
import { BuscarAutoComponent } from './components/buscar-auto/buscar-auto.component';
import { AllAutosComponent } from './components/all-autos/all-autos.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { BotonesComponent } from './components/opcionesBusqueda/botones.component';

@NgModule({
  declarations: [NuevosComponent, BuscarAutoComponent, AllAutosComponent, CarruselComponent, BotonesComponent],
  imports: [nuevosRoutingModule, ReactiveFormsModule, FormsModule,CommonModule],
})
export class NuevosModule {}
