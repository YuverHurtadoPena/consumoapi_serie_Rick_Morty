import { InfoPersonaje } from './../dto/info-personaje';
import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { EpisodioService } from '../episodio.service';
import { ListadoepisodiosComponent } from '../listadoepisodios/listadoepisodios.component';
import {MatDialog} from '@angular/material/dialog';
import { FormFavoritoComponent } from '../form-favorito/form-favorito.component';
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
    @Inject(MAT_DIALOG_DATA) public data: personaje,public dialog: MatDialog,servicioEpisodio:EpisodioService) {
      this.servicioEpisodio = servicioEpisodio;
     }

  ngOnInit(): void {
    this.getPersonajes();
  }

  openDialog(id_personaje:number) {
    this.dialog.open(FormFavoritoComponent , {
      data: {
        "id_person":id_personaje
      },
      width:"30%"

    });
    this.dialogRef.close();
  }

  getPersonajes(){
    console.log(this.data)
    this.arrayPersona=[];
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
