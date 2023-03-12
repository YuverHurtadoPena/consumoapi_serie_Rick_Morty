import {Component, OnInit} from '@angular/core';
import { EpidosodioInterface } from '../dto/epidosodio-interface';

import {MatDialog} from '@angular/material/dialog';

import { EpisodioService } from '../episodio.service';
import { ListaPersonajesComponent } from '../lista-personajes/lista-personajes.component';
@Component({
  selector: 'app-listadoepisodios',
  templateUrl: './listadoepisodios.component.html',
  styleUrls: ['./listadoepisodios.component.css']
})
export class ListadoepisodiosComponent implements OnInit {



  private service:EpisodioService;


  episodios:EpidosodioInterface[]=[];
  url="";
  episodio_url: string |null="";
  pages=0;
  pagina_ultima = 0;
  next_pages=1;

  constructor(service:EpisodioService,public dialog: MatDialog) {
    this.service = service;
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
    this.episodio_url = localStorage.getItem("url");
    this.pagina_ultima = Number(localStorage.getItem("numeroPages"));

    this.getEpisodios(this.next_pages.toString());
  }

  getInfoEpisodiosPages(){
    this.service.getInfoEpisodiosPages().subscribe({
      next:(data)=>{
        this.url=data.info.next.split("=");
        this.pages = data.info.pages.toString();
        localStorage.setItem("numeroPages", this.pages.toString());

      },
      error:()=>{
        alert("Ocurrio un error")

      }
    })
  }

  next(){
    if (this.next_pages<this.pagina_ultima){
      this.next_pages = this.next_pages+1;
      this.getEpisodios(this.next_pages.toString());

    }
  }
  back(){
    if (this.next_pages>1){
      this.next_pages = this.next_pages-1;
      this.getEpisodios(this.next_pages.toString());

    }
  }
  getEpisodios(pagina:string){

  let url=this.episodio_url+"="+pagina;
   this.service.getInfoEpisodios(url).subscribe({
    next:(data)=>{
      console.log(data)
      this.episodios = data.results;

    },
    error:()=>{
      alert("Ocurrio un error")

    }

  });

  }

}
