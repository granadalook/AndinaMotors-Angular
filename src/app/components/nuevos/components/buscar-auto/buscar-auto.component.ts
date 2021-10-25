import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/auto.model';
import { HelperService } from 'src/app/core/services/help/helper.service';

@Component({
  selector: 'app-buscar-auto',
  templateUrl: './buscar-auto.component.html',
  styleUrls: ['./buscar-auto.component.scss']
})
export class BuscarAutoComponent implements OnInit {
    auto?:Auto
  constructor( private helperService: HelperService) { }

  ngOnInit(): void {
    this.helperService.result.subscribe(rta => this.auto = rta)
  }

}
