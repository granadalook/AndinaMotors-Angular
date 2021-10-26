import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { homeRoutingModule } from './home-routing.module';
import { AceitesComponent } from './components/aceites/aceites.component';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';

@NgModule({
  declarations: [HomeComponent, AceitesComponent, ClasificacionComponent],
  imports: [homeRoutingModule],
})
export class HomeModule {}
