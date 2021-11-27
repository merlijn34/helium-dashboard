import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHotspotsComponent } from './my-hotspots.component';

describe('MyHotspotsComponent', () => {
  let component: MyHotspotsComponent;
  let fixture: ComponentFixture<MyHotspotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHotspotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHotspotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
