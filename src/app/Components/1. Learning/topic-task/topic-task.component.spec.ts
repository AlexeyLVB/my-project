import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicTaskComponent } from './topic-task.component';

describe('TopicTaskComponent', () => {
  let component: TopicTaskComponent;
  let fixture: ComponentFixture<TopicTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
