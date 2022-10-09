import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudent : FormGroup;
  checked = false;
  indeterminate = false;
  labelPosition: 'female' | 'male' = 'male';
  disabled = false;
  
  
  

  constructor(
    private dialogRef: MatDialogRef<AddStudentComponent>,
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
  saveEmployee(){
    console.log('---------------edit employee--------------',this.addStudent.value);
    if(this.addStudent.valid) {
      this.dialogRef.close(this.addStudent.value);  
  }
    
  }
}

