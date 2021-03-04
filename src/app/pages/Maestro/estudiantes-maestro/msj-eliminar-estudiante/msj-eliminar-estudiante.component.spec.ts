import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEliminarEstudianteComponent } from './msj-eliminar-estudiante.component';

describe('MsjEliminarEstudianteComponent', () => {
  let component: MsjEliminarEstudianteComponent;
  let fixture: ComponentFixture<MsjEliminarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsjEliminarEstudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEliminarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
