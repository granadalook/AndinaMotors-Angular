import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auto } from 'src/app/auto.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private Marcas = new BehaviorSubject<any>('');
  public customMessage = this.Marcas.asObservable();
  private dato = new BehaviorSubject <any>('')
  public result = this.dato.asObservable()

  constructor() { }
  public allMarcas(marcas: Array<Auto>): void {
    this.Marcas.next(marcas);
  }
  public buscarMarca(auto:Auto){
    this.dato.next(auto);
  }
}
