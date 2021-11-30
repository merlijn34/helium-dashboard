import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHotspotsTableComponent } from './my-hotspots-table.component';

describe('MyHotspotsTableComponent', () => {
  let component: MyHotspotsTableComponent;
  let fixture: ComponentFixture<MyHotspotsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHotspotsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHotspotsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
