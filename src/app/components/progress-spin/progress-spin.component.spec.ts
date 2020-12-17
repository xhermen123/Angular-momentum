import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinComponent } from './progress-spin.component';

describe('ProgressSpinComponent', () => {
  let component: ProgressSpinComponent;
  let fixture: ComponentFixture<ProgressSpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
