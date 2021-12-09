import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHotspotComponent } from './my-hotspot.component';

describe('MyHotspotComponent', () => {
  let component: MyHotspotComponent;
  let fixture: ComponentFixture<MyHotspotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHotspotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHotspotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
