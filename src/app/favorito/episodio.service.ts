import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


import { InfoGeneral } from './dto/info-general';
import { InfoPersonaje } from './dto/info-personaje';


@Injectable({
  providedIn: 'root'
})
export class EpisodioService {
  header = new Headers();
  private api1= environment.api1;
  private api3= environment.api3;

  private httpClient: HttpClient;



  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;

  }
  getInfoEpisodiosPages() {
    return this.httpClient.get<any>(
      `${this.api1}episode`
    );

  }

  getInfoEpisodios(url:string): Observable<InfoGeneral> {
    return this.httpClient.get<InfoGeneral>(
      `${url}`
    );

  }

  getInfoPersonaje(url:string): Observable<InfoPersonaje> {
    return this.httpClient.get<InfoPersonaje>(
      `${url}`
    );

  }


}
