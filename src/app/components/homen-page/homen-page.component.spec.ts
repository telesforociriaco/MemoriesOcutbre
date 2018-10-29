import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenPageComponent } from './homen-page.component';

describe('HomenPageComponent', () => {
  let component: HomenPageComponent;
  let fixture: ComponentFixture<HomenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
