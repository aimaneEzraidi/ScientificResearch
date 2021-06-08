import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphdComponent } from './addphd.component';

describe('AddphdComponent', () => {
  let component: AddphdComponent;
  let fixture: ComponentFixture<AddphdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddphdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddphdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
