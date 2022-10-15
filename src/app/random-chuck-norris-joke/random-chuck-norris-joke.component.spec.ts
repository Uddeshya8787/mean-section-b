import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChuckNorrisJokeComponent } from './random-chuck-norris-joke.component';

describe('RandomChuckNorrisJokeComponent', () => {
  let component: RandomChuckNorrisJokeComponent;
  let fixture: ComponentFixture<RandomChuckNorrisJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomChuckNorrisJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomChuckNorrisJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
