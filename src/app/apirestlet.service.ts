import { Injectable } from '@angular/core';
import { Insputssearch } from './insputssearch';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseSearchUrl = 'https://nuevoUsuario:nuevaContrasena@localhost:8183/ApiServerWeb/searchActivities';

  async getAllActividades(): Promise<Insputssearch[]> {
    const data = await fetch(this.baseSearchUrl);
    return await data.json() ?? [];
  }

  async getActividadesPorFecha(fechaInicio: String, fechaFinal: String): Promise<Insputssearch[]> {
    const url = `${this.baseSearchUrl}?METODO=forDate&fechaInicio=${fechaInicio}&fechaFinal=${fechaFinal}`;
    const data = await fetch(url);
    return await data.json() ?? [];
  }

  async getActividadesPorLugar(lugar: String): Promise<Insputssearch[]> {
    const url = `${this.baseSearchUrl}?METODO=forPlace&lugar=${lugar}`;
    const data = await fetch(url);
    return await data.json() ?? [];
  }
  
  async getActividadesPorCategoria(categoria: String): Promise<Insputssearch[]> {
    const url = `${this.baseSearchUrl}?METODO=forCategory&categoria=${categoria}`;
    const data = await fetch(url);
    return await data.json() ?? [];
  }

  async getActividadById(id: number): Promise<Insputssearch | undefined> {
    const data = await fetch(`${this.baseSearchUrl}/${id}`);
    return await data.json() ?? {};
  }

  // Puedes agregar más métodos según sea necesario para interactuar con tu API RESTLET
}
