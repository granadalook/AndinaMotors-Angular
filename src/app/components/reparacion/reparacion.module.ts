import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ReparacionComponent } from './components/reparacion/reparacion.component';
import { reparacionRoutingModule } from './reparacion-routing.module';

@NgModule({
  declarations: [ReparacionComponent],
  imports: [reparacionRoutingModule,SharedModule],
})
export class ReparacionModule {}
