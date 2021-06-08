import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpubComponent } from './addpub.component';

describe('AddpubComponent', () => {
  let component: AddpubComponent;
  let fixture: ComponentFixture<AddpubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
