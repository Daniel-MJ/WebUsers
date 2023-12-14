import { Component } from '@angular/core';
import { ApiService } from '../apirestlet.service';
import { Insputssearch } from '../insputssearch';
import { ActividadComponent } from '../activities/activities.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  title = 'Busqueda Por Parametros.';
  fechaInicial: string = "";
  fechaFinal: string = "";
  actividades: Insputssearch[] = [];

  constructor(private apiService: ApiService) {}

  buscarActividades() {
    const fechaInicio = this.fechaInicial // Reemplaza esto con la fecha recogida
    const fechaFinal = this.fechaFinal; // Reemplaza esto con la fecha recogida

    this.apiService.getActividadesPorFecha(fechaInicio, fechaFinal)
      .then((actividades: Insputssearch[]) => {
        // Manejar las actividades devueltas
        this.actividades = actividades;
      })
      .catch(error => {
        // Manejar el error si es necesario
        console.error('Error al obtener actividades:',error);
      });
  }
}
