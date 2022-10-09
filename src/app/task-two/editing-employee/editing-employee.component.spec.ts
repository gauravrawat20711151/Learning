import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingEmployeeComponent } from './editing-employee.component';

describe('EditingEmployeeComponent', () => {
  let component: EditingEmployeeComponent;
  let fixture: ComponentFixture<EditingEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditingEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditingEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
