import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesMaestroComponent } from './estudiantes-maestro.component';

describe('EstudiantesMaestroComponent', () => {
  let component: EstudiantesMaestroComponent;
  let fixture: ComponentFixture<EstudiantesMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantesMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
