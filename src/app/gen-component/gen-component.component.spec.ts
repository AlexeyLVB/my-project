import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenComponentComponent } from './gen-component.component';

describe('GenComponentComponent', () => {
  let component: GenComponentComponent;
  let fixture: ComponentFixture<GenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
