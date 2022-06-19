import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightthComponent } from './eightth.component';

describe('EightthComponent', () => {
  let component: EightthComponent;
  let fixture: ComponentFixture<EightthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
