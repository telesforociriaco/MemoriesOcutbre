import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConmemoracionPageComponent } from './conmemoracion-page.component';

describe('ConmemoracionPageComponent', () => {
  let component: ConmemoracionPageComponent;
  let fixture: ComponentFixture<ConmemoracionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConmemoracionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConmemoracionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
