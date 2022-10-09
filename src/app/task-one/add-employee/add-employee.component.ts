import {Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder,} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployee : FormGroup;
  checked = false;
  indeterminate = false;
  labelPosition: 'female' | 'male' = 'male';
  disabled = false;
  

  constructor(
    private dialogRef: MatDialogRef<AddEmployeeComponent>,
    private fb: FormBuilder
    ) {
    this.createform();
   }


  ngOnInit(): void {

  }
  createform(){
    this.addEmployee = this.fb.group({
      EmployeeID : [null,Validators.required ],
      fname : ['',Validators.required],
      lname : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      dob :['',Validators.required],
      Designation :['',Validators.required],
      salary :['',Validators.required],
      password:['',Validators.required,],
      confirmPassword:['',Validators.required]
    })
  }
  hide = true;
  get passwordInput() { return this.addEmployee.get('password'); }  

  hide1 =true;
  get confirmPasswordInput()  {
    return this.addEmployee.get('confirmPassword');
  }

  saveEmployee(){
    console.log('---------------edit employee--------------',this.addEmployee.value);
    this.dialogRef.close(this.addEmployee.value);
  }
    
  }
  

