import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '*',
    loadChildren: ()=> import('./components/home/home.module').then ((m)=> m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: ()=> import('./components/home/home.module').then ((m)=> m.HomeModule)
  },
  {
    path:'citas',
    loadChildren: ()=> import('./components/citas/citas.module').then((m)=> m.CitasModule)
  },
  {
    path:'clientes',
    loadChildren: ()=> import('./components/clientes/clientes.module').then((m)=> m.ClientesModule)
  },
  {
    path: 'nuevos',
    loadChildren: ()=> import ('./components/nuevos/nuevos.module').then((m)=> m.NuevosModule)
  },
  {
    path: 'reparacion',
    loadChildren:()=> import('./components/reparacion/reparacion.module').then ((m)=> m.ReparacionModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
