import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDemoComponent } from './rxjs-demo.component';

describe('RxjsDemoComponent', () => {
  let component: RxjsDemoComponent;
  let fixture: ComponentFixture<RxjsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsDemoComponent]
    });
    fixture = TestBed.createComponent(RxjsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
