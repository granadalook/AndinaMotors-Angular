import { NgModule } from '@angular/core';

import { CitasComponent } from './components/citas/citas.component';

import { citasRoutingModule } from './citas-routing.module';



@NgModule({
  declarations: [
    CitasComponent
  ],
  imports: [
  citasRoutingModule,
   
  ]
})
export class CitasModule { }
