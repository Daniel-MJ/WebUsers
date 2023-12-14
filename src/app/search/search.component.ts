import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  title = 'Busqueda Por Parametros.';
  fechaInicial: string = "";
  fechaFinal: string = "";   
}
