import { NgModule } from '@angular/core';
import { ClientesComponent } from './components/clientes/clientes.component';
import { clientesRoutingModule } from './clientes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ClientesComponent],
  imports: [clientesRoutingModule,SharedModule],
  exports: [],
})
export class ClientesModule {}
