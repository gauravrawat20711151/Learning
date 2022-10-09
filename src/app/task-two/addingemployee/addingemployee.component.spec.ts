import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingemployeeComponent } from './addingemployee.component';

describe('AddingemployeeComponent', () => {
  let component: AddingemployeeComponent;
  let fixture: ComponentFixture<AddingemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
