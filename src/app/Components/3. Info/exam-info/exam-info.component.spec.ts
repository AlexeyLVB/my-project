import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamInfoComponent } from './exam-info.component';

describe('ExamInfoComponent', () => {
  let component: ExamInfoComponent;
  let fixture: ComponentFixture<ExamInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamInfoComponent);
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
