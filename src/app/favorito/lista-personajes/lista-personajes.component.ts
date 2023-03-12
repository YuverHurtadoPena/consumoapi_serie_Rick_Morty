import { InfoPersonaje } from './../dto/info-personaje';
import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { EpisodioService } from '../episodio.service';
import { ListadoepisodiosComponent } from '../listadoepisodios/listadoepisodios.component';
export interface personaje {
  personajes:any[]
}
@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  private servicioEpisodio:EpisodioService;
  arrayPersona:InfoPersonaje[]=[];

  constructor( public dialogRef: MatDialogRef<ListadoepisodiosComponent >,
    @Inject(MAT_DIALOG_DATA) public data: personaje,servicioEpisodio:EpisodioService) {
      this.servicioEpisodio = servicioEpisodio;
     }

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes(){
    this.data.personajes.forEach(pers=>{
      this.servicioEpisodio.getInfoPersonaje(pers).subscribe({
        next:(inf)=>{
          console.log(inf)
          this.arrayPersona.push(inf);

        },
        error:(err)=>{console.log("error en personajes:"+err)}

      });

    })
  }

}
