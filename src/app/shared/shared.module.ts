import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { LlantasComponent } from './components/llantas/llantas.component';

@NgModule({
  declarations: [FooterComponent, NavBarComponent, LlantasComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, FooterComponent,LlantasComponent],
})
export class SharedModule {}
