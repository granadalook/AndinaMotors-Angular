import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { homeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [homeRoutingModule],
})
export class HomeModule {}
