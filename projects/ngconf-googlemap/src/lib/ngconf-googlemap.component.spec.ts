import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgconfGooglemapComponent } from './ngconf-googlemap.component';

describe('NgconfGooglemapComponent', () => {
  let component: NgconfGooglemapComponent;
  let fixture: ComponentFixture<NgconfGooglemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgconfGooglemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgconfGooglemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
