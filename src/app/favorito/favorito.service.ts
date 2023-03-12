import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Favoritointerfaz } from './dto/favoritointerfaz';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private cookieService:CookieService;
  private api3= environment.api3;

  private httpClient: HttpClient;




  constructor(httpClient: HttpClient,cookieService:CookieService) {
    this.httpClient =  httpClient;
    this.cookieService = cookieService;
  }

  guardarEpisodioFavorito(dto:Favoritointerfaz,token:string):Observable<any>{

        return this.httpClient.get<any>(
          `${this.api3}Favoritos`,
          { headers: new HttpHeaders({

            'Authorization':'Bearer '+token
          })}
        );

      }
}
