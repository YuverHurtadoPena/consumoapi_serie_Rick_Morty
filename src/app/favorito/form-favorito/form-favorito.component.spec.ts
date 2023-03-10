import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFavoritoComponent } from './form-favorito.component';

describe('FormFavoritoComponent', () => {
  let component: FormFavoritoComponent;
  let fixture: ComponentFixture<FormFavoritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFavoritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
