import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerDemoComponent } from './logger-demo.component';

describe('LoggerDemoComponent', () => {
  let component: LoggerDemoComponent;
  let fixture: ComponentFixture<LoggerDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggerDemoComponent]
    });
    fixture = TestBed.createComponent(LoggerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
