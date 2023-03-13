import {Component, OnInit} from '@angular/core';
import { EpidosodioInterface } from '../dto/epidosodio-interface';

import {MatDialog} from '@angular/material/dialog';

import { EpisodioService } from '../episodio.service';
import { ListaPersonajesComponent } from '../lista-personajes/lista-personajes.component';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-listadoepisodios',
  templateUrl: './listadoepisodios.component.html',
  styleUrls: ['./listadoepisodios.component.css']
})
export class ListadoepisodiosComponent implements OnInit {
  private cookieService:CookieService;



  private service:EpisodioService;


  episodios:EpidosodioInterface[]=[];
  url="https://rickandmortyapi.com/api/episode?page=";

  pages=0;
  pagina_ultima = 0;
  next_pages=1;

  constructor(service:EpisodioService,public dialog: MatDialog,cookieService:CookieService) {
    this.service = service;
    this.cookieService = cookieService;
  }
  openDialog(personajes:any[]=[]) {
    this.dialog.open(ListaPersonajesComponent, {
      data: {
        "personajes":personajes
      },
      width:'30%',
      height:'80%',

    });
  }

  ngOnInit(): void {
    this.getInfoEpisodiosPages();
    this.pagina_ultima = Number( this.cookieService.get("numeroPages"));
    this.getEpisodios(this.url+this.next_pages.toString());
  }

  getInfoEpisodiosPages(){
    this.service.getInfoEpisodiosPages().subscribe({
      next:(data)=>{
        this.pagina_ultima = data.info.pages;
        console.log(data)
        this.cookieService.set("numeroPages",data.info.pages.toString());
      },
      error:()=>{
        alert("Ocurrio un error")

      }
    })
  }

  next(){
    if (this.next_pages<this.pagina_ultima){
      this.next_pages = this.next_pages+1;
      this.getEpisodios(this.url+this.next_pages.toString());

    }
  }
  back(){
    if (this.next_pages>1){
      this.next_pages = this.next_pages-1;
      this.getEpisodios(this.url+this.next_pages.toString());

    }
  }
  getEpisodios(pagina:string){

  let url=pagina;
   this.service.getInfoEpisodios(url).subscribe({
    next:(data)=>{
      console.log(data)
      this.episodios = data.results;

    },
    error:(err)=>{
      alert("Ocurrio un error")

    }

  });

  }

}
