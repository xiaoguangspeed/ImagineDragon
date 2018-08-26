import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelWorldComponent } from './marvel-world.component';

describe('MarvelWorldComponent', () => {
  let component: MarvelWorldComponent;
  let fixture: ComponentFixture<MarvelWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
