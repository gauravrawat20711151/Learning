import { Component, Inject, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder,FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editEmployee : FormGroup;
  formBuilder: any;
  constructor(
    private dialogRef: MatDialogRef<EditEmployeeComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      console.log('------------data-0-------',this.data);
    this.createform();
   }

  ngOnInit(): void {
  }
  createform(){
    this.editEmployee = this.fb.group({
      EmployeeID : [this.data.EmployeeID,Validators.required ],
      fname : [this.data.fname,Validators.required],
      lname : [this.data.lname,Validators.required],
      email : [this.data.email, [Validators.required, Validators.email]],
      salary :[this.data.salary,Validators.required],
      password:[this.data.password,Validators.required,],
      confirmPassword:[this.data.confirmPassword,Validators.required]
      
    })
  }
  hide = true;
  get user() { return this.editEmployee.get('user'); }
  get passwordInput() { return this.editEmployee.get('password'); }  

  saveEmployee(){
    console.log('---------------edit employee--------------',this.editEmployee);
    this.dialogRef.close(this.editEmployee.value);
    
  }
}

