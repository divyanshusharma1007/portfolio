/* The code you provided is a test suite for an Angular component called `MyWorkComponent`. */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkComponent } from './my-work.component';

describe('MyWorkComponent', () => {
  let component: MyWorkComponent;
  let fixture: ComponentFixture<MyWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWorkComponent]
    });
    fixture = TestBed.createComponent(MyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
