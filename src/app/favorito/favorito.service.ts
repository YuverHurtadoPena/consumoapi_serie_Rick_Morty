import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Favoritointerfaz } from './dto/favoritointerfaz';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  private api3= environment.api3;

  private httpClient: HttpClient;



  constructor(httpClient: HttpClient) {
    this.httpClient =  httpClient;
  }

  guardarEpisodioFavorito(dto:Favoritointerfaz,token:string):Observable<any>{

        return this.httpClient.post<any>(
          `${this.api3}Favoritos`,
          dto
        );

      }
}
