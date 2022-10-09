import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder,} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-adding-student',
  templateUrl: './adding-student.component.html',
  styleUrls: ['./adding-student.component.css']
})
export class AddingStudentComponent implements OnInit {
  addStudent : FormGroup;
  checked = false;
  indeterminate = false;
  labelPosition: 'female' | 'male' = 'male';
  disabled = false;
  

  constructor(
    private dialogRef: MatDialogRef<AddingStudentComponent>,
    private fb: FormBuilder
    ) {
    this.createform();
   }


  ngOnInit(): void {

  }
  createform(){
    this.addStudent = this.fb.group({
      studentId : [null,Validators.required ],
      fname : ['',Validators.required],
      lname : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      fee :['',Validators.required],
    
    })
  }
  hide = true;
  get passwordInput() { return this.addStudent.get('password'); }  

  hide1 =true;
  get confirmPasswordInput()  {
    return this.addStudent.get('confirmPassword');
  }

  saveEmployee(){
    console.log('---------------edit employee--------------',this.addStudent.value);
    if(this.addStudent.valid) {
      this.dialogRef.close(this.addStudent.value);
    }
  }
    
  }
  