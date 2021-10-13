import { NgModule } from '@angular/core';

import { NuevosComponent } from './components/nuevos/nuevos.component';
import { nuevosRoutingModule } from './nuevos-routing.module';



@NgModule({
  declarations: [
    NuevosComponent
  ],
  imports: [nuevosRoutingModule
    
  ]
})
export class NuevosModule { }
