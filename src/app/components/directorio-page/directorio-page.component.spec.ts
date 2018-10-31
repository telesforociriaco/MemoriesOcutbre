import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioPageComponent } from './directorio-page.component';

describe('DirectorioPageComponent', () => {
  let component: DirectorioPageComponent;
  let fixture: ComponentFixture<DirectorioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
