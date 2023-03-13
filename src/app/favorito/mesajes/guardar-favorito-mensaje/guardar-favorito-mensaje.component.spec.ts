import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarFavoritoMensajeComponent } from './guardar-favorito-mensaje.component';

describe('GuardarFavoritoMensajeComponent', () => {
  let component: GuardarFavoritoMensajeComponent;
  let fixture: ComponentFixture<GuardarFavoritoMensajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarFavoritoMensajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarFavoritoMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
