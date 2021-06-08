import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofComponent } from './addprof.component';

describe('AddprofComponent', () => {
  let component: AddprofComponent;
  let fixture: ComponentFixture<AddprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
