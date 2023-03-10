import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoepisodiosComponent } from './listadoepisodios.component';

describe('ListadoepisodiosComponent', () => {
  let component: ListadoepisodiosComponent;
  let fixture: ComponentFixture<ListadoepisodiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoepisodiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoepisodiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
