import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsjEliminarTareaComponent } from './msj-eliminar-tarea.component';

describe('MsjEliminarTareaComponent', () => {
  let component: MsjEliminarTareaComponent;
  let fixture: ComponentFixture<MsjEliminarTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsjEliminarTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsjEliminarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
