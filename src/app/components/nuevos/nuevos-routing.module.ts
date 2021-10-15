import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevosComponent } from './components/nuevos/nuevos.component';

const routes: Routes = [
  {
    path: '',
    component: NuevosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class nuevosRoutingModule {}
