import { NgModule } from '@angular/core';

import { CitasComponent } from './components/citas/citas.component';

import { citasRoutingModule } from './citas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CitasComponent],
  imports: [citasRoutingModule,SharedModule],
})
export class CitasModule {}
