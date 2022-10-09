import { Component, Inject, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder,} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editing-employee',
  templateUrl: './editing-employee.component.html',
  styleUrls: ['./editing-employee.component.css']
})
export class EditingEmployeeComponent implements OnInit {
  editEmployee : FormGroup;
  formBuilder: any;
  constructor(
    private dialogRef: MatDialogRef<EditingEmployeeComponent>,
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
      
    })
  }
 

  save(){
    console.log('---------------edit employee--------------',this.editEmployee);
    if(this.editEmployee.valid) {
      this.dialogRef.close(this.editEmployee.value);  
  }
    
    
  }
}

