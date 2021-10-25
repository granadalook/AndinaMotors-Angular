import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/auto.model';
import { HelperService } from 'src/app/core/services/help/helper.service';

@Component({
  selector: 'app-all-autos',
  templateUrl: './all-autos.component.html',
  styleUrls: ['./all-autos.component.scss']
})
export class AllAutosComponent implements OnInit {
  vehiculos?:Array<Auto>
  constructor(private helperService:HelperService) { }

  ngOnInit(): void {
    this.helperService.customMessage.subscribe(rta => this.vehiculos = rta)
    }
  
}
