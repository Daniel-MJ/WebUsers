import { Injectable } from '@angular/core';
import { Insputssearch } from './insputssearch';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseSearchUrl = 'https://localhost:8183/ApiServerWeb/searchActivities';

  constructor(private httpClient: HttpClient) {}

  async getAllActividades(): Promise<Insputssearch[]> {
    const data = await fetch(this.baseSearchUrl);
    return await data.json() ?? [];
  }

  getActividadesPorFecha(fechaInicio: String, fechaFinal: String): Observable<Insputssearch[]> {
    const url = `${this.baseSearchUrl}?METODO=forDate&fechaInicio=${fechaInicio}&fechaFinal=${fechaFinal}`;
    const headers  = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('nuevoUsuario:nuevaContrasena'),
    });

    return this.httpClient.get<Insputssearch[]>(url,{ headers, withCredentials: true });
  }

  getActividadesPorLugar(lugar: String): Observable<Insputssearch[]> {
    const url = `${this.baseSearchUrl}?METODO=forPlace&lugar=${lugar}`;
    const headers  = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('nuevoUsuario:nuevaContrasena'),
    });
      return this.httpClient.get<Insputssearch[]>(url,{ headers, withCredentials: true });
    
  }
  
  getActividadesPorCategoria(categoria: String): Observable<Insputssearch[]> {
    const url = `${this.baseSearchUrl}?METODO=forCategory&categoria=${categoria}`;
    const headers  = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa('nuevoUsuario:nuevaContrasena'),
    });
      return this.httpClient.get<Insputssearch[]>(url,{ headers, withCredentials: true });
  }

  async getActividadById(id: number): Promise<Insputssearch | undefined> {
    const url = `${this.baseSearchUrl}/${id}`;
    const data = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Authorization': 'Basic ' + btoa('nuevoUsuario:nuevaContrasena')
      }

    });
    return await data.json() ?? {};
  }

  // Puedes agregar más métodos según sea necesario para interactuar con tu API RESTLET
}
