import { NgModule } from '@angular/core';

import { ReparacionComponent } from './components/reparacion/reparacion.component';
import { reparacionRoutingModule } from './reparacion-routing.module';

@NgModule({
  declarations: [ReparacionComponent],
  imports: [reparacionRoutingModule],
})
export class ReparacionModule {}
