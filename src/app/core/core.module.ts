import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosService } from './services/autos/autos.service';
import { HelperService } from './services/help/helper.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AutosService,HelperService
  ]
})
export class CoreModule { }
