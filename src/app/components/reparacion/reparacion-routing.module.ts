import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReparacionComponent } from './components/reparacion/reparacion.component';



const routes: Routes = [
  {
    path: '',
    component: ReparacionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class reparacionRoutingModule {}
