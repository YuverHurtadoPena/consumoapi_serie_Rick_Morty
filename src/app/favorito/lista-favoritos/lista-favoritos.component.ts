import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Favoritointerfaz } from '../dto/favoritointerfaz';
import { InfoPersonaje } from '../dto/info-personaje';
import { EpisodioService } from '../episodio.service';
import { FavoritoService } from '../favorito.service';

@Component({
  selector: 'app-lista-favoritos',
  templateUrl: './lista-favoritos.component.html',
  styleUrls: ['./lista-favoritos.component.css']
})
export class ListaFavoritosComponent implements OnInit {
  private cookieService:CookieService;
  private servicio:FavoritoService;
  url = "https://rickandmortyapi.com/api/character/";
  private servicioEpisodio:EpisodioService;
  arrayPersona:InfoPersonaje[]=[];
  arrayFavorito:Favoritointerfaz[]=[];

  constructor(cookieService:CookieService, servicio:FavoritoService,servicioEpisodio:EpisodioService) {
    this.cookieService = cookieService;
    this.servicio = servicio;
    this.servicioEpisodio = servicioEpisodio;
   }

  ngOnInit(): void {
    this.getFovoritos();


  }
  getFovoritos(){


    this.servicio.getFavorito( this.cookieService.get("token")).subscribe({
      next:(data)=>{
        this.arrayFavorito = data;
        this.arrayFavorito.forEach(inf=>{
        this.servicioEpisodio.getInfoPersonaje(this.url+inf.id_caracter.toString()).subscribe({
          next:(informacion=>{
            this.arrayPersona.push(informacion);

          })
        });

       });

      },
      error:(err)=>{
        alert("Ocurrio un error inesperado")
        console.log(err)
      }

    });
  }

}
