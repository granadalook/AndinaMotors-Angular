import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NuevosComponent } from './components/nuevos/nuevos.component';
import { nuevosRoutingModule } from './nuevos-routing.module';

@NgModule({
  declarations: [NuevosComponent],
  imports: [nuevosRoutingModule, ReactiveFormsModule, FormsModule,CommonModule],
})
export class NuevosModule {}
