import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosService } from './services/autos/autos.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AutosService
  ]
})
export class CoreModule { }
