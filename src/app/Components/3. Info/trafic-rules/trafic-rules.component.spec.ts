import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraficRulesComponent } from './trafic-rules.component';

describe('TraficRulesComponent', () => {
  let component: TraficRulesComponent;
  let fixture: ComponentFixture<TraficRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraficRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraficRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
