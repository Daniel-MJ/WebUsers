import { Component } from '@angular/core';
import { ApiService } from '../apirestlet.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  title = 'Busqueda Por Parametros.';
  fechaInicial: string = "";
  fechaFinal: string = "";

  constructor(private apiService: ApiService) {}

  buscarActividades() {
    const fechaInicio = this.fechaInicial // Reemplaza esto con la fecha recogida
    const fechaFinal = this.fechaFinal; // Reemplaza esto con la fecha recogida

    this.apiService.getActividadesPorFecha(fechaInicio, fechaFinal)
      .then(actividades => {
        // Manejar las actividades devueltas
        console.log(actividades);
      })
      .catch(error => {
        // Manejar el error si es necesario
        console.error(error);
      });
  }
}
