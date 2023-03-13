import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormFavoritoComponent } from '../../form-favorito/form-favorito.component';
@Component({
  selector: 'app-guardar-favorito-mensaje',
  templateUrl: './guardar-favorito-mensaje.component.html',
  styleUrls: ['./guardar-favorito-mensaje.component.css']
})
export class GuardarFavoritoMensajeComponent implements OnInit {
  private router: Router;

  constructor( public dialogRef: MatDialogRef<FormFavoritoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,  router: Router) {
      this.router = router;
    }

  ngOnInit(): void {
  }
  irAFavorito(){
    this.router.navigate(["/lista/favoritos"]);
    this.dialogRef.close();
  }
}
