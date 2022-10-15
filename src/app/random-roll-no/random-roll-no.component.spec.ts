import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRollNoComponent } from './random-roll-no.component';

describe('RandomRollNoComponent', () => {
  let component: RandomRollNoComponent;
  let fixture: ComponentFixture<RandomRollNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomRollNoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomRollNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
