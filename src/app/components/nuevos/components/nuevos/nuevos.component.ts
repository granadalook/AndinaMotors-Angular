import { Component, OnInit } from '@angular/core';
import { AutosService } from '../../../../core/services/autos/autos.service';
import { Auto } from 'src/app/auto.model';

@Component({
  selector: 'app-nuevos',
  templateUrl: './nuevos.component.html',
  styleUrls: ['./nuevos.component.scss']
})
export class NuevosComponent implements OnInit {

  idVehiculo='';
  auto?:Auto;
  vehiculos?:Array<Auto>
  constructor(private autosService: AutosService) {
  }

  ngOnInit(): void {
  }
  buscarAutos(){
    this.vehiculos =this.autosService.traerAutos();
  }
  traerAuto() {
    this.auto = this.autosService.buscarAuto(this.idVehiculo);
      return this.auto;
  }
}