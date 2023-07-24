import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTextComponent } from './counter-text.component';

describe('CounterTextComponent', () => {
  let component: CounterTextComponent;
  let fixture: ComponentFixture<CounterTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
