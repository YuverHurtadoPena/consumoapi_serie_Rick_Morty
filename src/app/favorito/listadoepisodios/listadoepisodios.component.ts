import {Component, OnInit,Inject} from '@angular/core';
import { EpidosodioInterface } from '../dto/epidosodio-interface';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormFavoritoComponent } from '../form-favorito/form-favorito.component';
import { EpisodioService } from '../episodio.service';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
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
  openDialog() {
    this.dialog.open(FormFavoritoComponent, {
      data: {
        animal: 'panda',
      },
      width:'30%',
    });
  }

  ngOnInit(): void {
    this.getInfoEpisodiosPages();
    this.episodio_url = localStorage.getItem("url");
    this.pagina_ultima = Number(localStorage.getItem("numeroPages"));

    this.getEpisodios();
  }

  getInfoEpisodiosPages(){
    this.service.getInfoEpisodiosPages().subscribe({
      next:(data)=>{
        this.url=data.info.next.split("=");
        localStorage.setItem("url", this.url[0]);
        this.pages = data.info.pages.toString();
        localStorage.setItem("numeroPages", this.pages.toString());


      },
      error:()=>{
        alert("Ocurrio un error")

      }
    })
  }

  getEpisodios(){

  let url=this.episodio_url+"="+this.next_pages.toString();
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
