import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      employeeID : [null,Validators.required ],
      fname : ['',Validators.required],
      lname : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      salary :['',Validators.required],
     
    })
  }
  saveEmployee(){
    console.log('---------------edit employee--------------',this.addEmployee.value);
    if(this.addEmployee.valid) {
      this.dialogRef.close(this.addEmployee.value);  
  }
    
  }
}