import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EpidosodioInterface } from './dto/epidosodio-interface';
import { InfoGeneral } from './dto/info-general';
import { InfoPages } from './dto/info-pages';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  private api1= environment.api1;

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
}
