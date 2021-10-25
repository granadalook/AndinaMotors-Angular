import { Component, OnInit } from '@angular/core';
import { AutosService } from 'src/app/core/services/autos/autos.service';
import { HelperService } from 'src/app/core/services/help/helper.service';
import { Auto } from 'src/app/auto.model';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent implements OnInit {
  vehiculos?:Array<Auto>;
  idVehiculo='';
  auto?:Auto;
  constructor(private autosService: AutosService,private helperService: HelperService) { }

  ngOnInit(): void {
  }
  buscarAuto() {
    const Auto:any = this.auto = this.autosService.Buscar(this.idVehiculo);
    this.helperService.buscarMarca(Auto) ;
  }
  allAutos(){
    const marcas:Array<Auto> = this.vehiculos = this.autosService.traer()
    this.helperService.allMarcas(marcas)
  }
}
