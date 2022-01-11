import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHotspotComponent } from './single-hotspot.component';

describe('MyHotspotComponent', () => {
  let component: SingleHotspotComponent;
  let fixture: ComponentFixture<SingleHotspotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHotspotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHotspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
