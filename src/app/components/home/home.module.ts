import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { homeRoutingModule } from './home-routing.module';
import { AceitesComponent } from './components/aceites/aceites.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { PresionllantasComponent } from './components/presionllantas/presionllantas.component';

@NgModule({
  declarations: [HomeComponent, AceitesComponent, ClasificacionComponent, PresionllantasComponent],
  imports: [homeRoutingModule],
})
export class HomeModule {}
