import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MmemoriPageComponent } from './mmemori-page.component';

describe('MmemoriPageComponent', () => {
  let component: MmemoriPageComponent;
  let fixture: ComponentFixture<MmemoriPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MmemoriPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MmemoriPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
