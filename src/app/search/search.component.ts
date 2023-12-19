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
  selectedCategoria: string = "";
  title = 'Busqueda Por Parametros.';
  fechaInicial: string = "";
  fechaFinal: string = "";
  actividades: Insputssearch[] = [];
  lugar: string = "";
  categoria: string = ""

  constructor(private apiService: ApiService) {}

  buscarActividadesPorFecha() {
    const fechaInicio = this.fechaInicial // Reemplaza esto con la fecha recogida
    const fechaFinal = this.fechaFinal; // Reemplaza esto con la fecha recogida
    const lugar = this.lugar;
    const categoria = this.categoria;

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

  buscarActividadesPorLugar() {
    const lugar = this.lugar // Reemplaza esto con la fecha recogida

    this.apiService.getActividadesPorLugar(lugar)
      .then((actividades: Insputssearch[]) => {
        // Manejar las actividades devueltas
        this.actividades = actividades;
      })
      .catch(error => {
        // Manejar el error si es necesario
        console.error('Error al obtener actividades:',error);
      });
  }

  buscarActividadesPorCategoria() {
    const categoria = this.selectedCategoria // Reemplaza esto con la fecha recogida

    this.apiService.getActividadesPorCategoria(categoria)
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
