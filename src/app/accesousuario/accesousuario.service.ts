import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './dto/login';
import { RegistroLogin } from './dto/registro-login';

@Injectable({
  providedIn: 'root'
})

export class AccesousuarioService {
  private api3 =environment.api3;
  private api2= environment.api2;

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }



  insertarUsuario(dto:RegistroLogin): Observable<any> {
    return this.httpClient.post<RegistroLogin>(
      `${this.api3}SOL/RegistroInicialSolicitante`,
      dto
    );
  }

  autenticacion(dto:Login): Observable<any> {
    return this.httpClient.post<any>(
      `${this.api2}SEG`,
      dto
    );
  }
}
