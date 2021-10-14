import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NuevosComponent } from './components/nuevos/nuevos.component';
import { nuevosRoutingModule } from './nuevos-routing.module';



@NgModule({
  declarations: [
    NuevosComponent,
  ],
  imports: [nuevosRoutingModule,ReactiveFormsModule,FormsModule
    
  ]
})
export class NuevosModule { }
