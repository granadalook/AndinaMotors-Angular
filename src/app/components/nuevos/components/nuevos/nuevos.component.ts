import { Component, OnInit } from '@angular/core';
import { AutosService } from '../../../../core/services/autos/autos.service';



@Component({
  selector: 'app-nuevos',
  templateUrl: './nuevos.component.html',
  styleUrls: ['./nuevos.component.scss']
})
export class NuevosComponent implements OnInit {

  idVehiculo: any;
  verAuto: any;
  constructor(private autosService: AutosService) {}

  ngOnInit(): void {
  }
  traerAuto() {
    this.verAuto = this.autosService.buscarAuto(this.idVehiculo);
    console.log(this.verAuto);
    return this.verAuto;
  }
}
