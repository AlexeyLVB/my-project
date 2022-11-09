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
<<<<<<< HEAD
});
=======
});
>>>>>>> bc66d537f94900a0b969bd8885fa3bbb89ccd98d
