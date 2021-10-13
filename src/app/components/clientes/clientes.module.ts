import { NgModule } from '@angular/core';
import { ClientesComponent } from './components/clientes/clientes.component';
import { clientesRoutingModule } from './clientes-routing.module';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    clientesRoutingModule
  ],exports:[
    
  ]
})
export class ClientesModule { }
