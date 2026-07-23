import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface SolicitudServicio {
  nombre: string;
  telefono: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ){}

  enviarSolicitud(solicitud: SolicitudServicio): Observable<any>{
    return this.http.post(`${this.apiUrl}/solicitud`,solicitud);
  }
}
