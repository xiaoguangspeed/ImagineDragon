import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepsiComponent } from './pepsi.component';

describe('PepsiComponent', () => {
  let component: PepsiComponent;
  let fixture: ComponentFixture<PepsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
