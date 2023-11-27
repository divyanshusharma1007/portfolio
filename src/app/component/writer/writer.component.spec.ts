/* The code you provided is a unit test for an Angular component called `WriterComponent`. */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterComponent } from './writer.component';

describe('WriterComponent', () => {
  let component: WriterComponent;
  let fixture: ComponentFixture<WriterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WriterComponent]
    });
    fixture = TestBed.createComponent(WriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
