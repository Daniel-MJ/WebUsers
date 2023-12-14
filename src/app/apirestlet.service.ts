import { Injectable } from '@angular/core';
import { Insputssearch } from './insputssearch'; // Asegúrate de que la ruta del archivo sea correcta

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseSearchUrl = 'http://localhost:8182/ApiServerWeb/searchActivities';

  async getAllActividades(): Promise<Insputssearch[]> {
    const data = await fetch(this.baseSearchUrl);
    return await data.json() ?? [];
  }

  async getActividadesPorFecha(fechaInicio: String, fechaFinal: String): Promise<Insputssearch[]> {
    const url = `${this.baseSearchUrl}?METODO=forDate&fechaInicio=${fechaInicio}&fechaFinal=${fechaFinal}`;
    const data = await fetch(url);
    return await data.json() ?? [];
  }
  
  async getActividadById(id: number): Promise<Insputssearch | undefined> {
    const data = await fetch(`${this.baseSearchUrl}/${id}`);
    return await data.json() ?? {};
  }

  // Puedes agregar más métodos según sea necesario para interactuar con tu API RESTLET
}
