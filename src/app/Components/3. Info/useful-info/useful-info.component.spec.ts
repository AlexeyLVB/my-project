import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulInfoComponent } from './useful-info.component';

describe('UsefulInfoComponent', () => {
  let component: UsefulInfoComponent;
  let fixture: ComponentFixture<UsefulInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefulInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefulInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
