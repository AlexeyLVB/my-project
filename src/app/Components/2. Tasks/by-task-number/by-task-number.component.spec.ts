import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTaskNumberComponent } from './by-task-number.component';

describe('ByTaskNumberComponent', () => {
  let component: ByTaskNumberComponent;
  let fixture: ComponentFixture<ByTaskNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByTaskNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByTaskNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
