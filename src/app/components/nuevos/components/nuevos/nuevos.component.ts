import { Component, OnInit } from '@angular/core';
import { AutosService } from '../../../../core/services/autos/autos.service';
import { Auto } from 'src/app/auto.model';





@Component({
  selector: 'app-nuevos',
  templateUrl: './nuevos.component.html',
  styleUrls: ['./nuevos.component.scss']
})
export class NuevosComponent implements OnInit {

  idVehiculo: number=0;
  verAuto: any;
  vehiculos: any
  constructor(private autosService: AutosService) {
    
  }

  ngOnInit(): void {
  }
  verAutos(){
    this.vehiculos =this.autosService.traerAutos();
    
  }
  traerAuto() {
    this.verAuto = this.autosService.buscarAuto(this.idVehiculo);
    console.log(this.verAuto);
    return this.verAuto;
  }
}
