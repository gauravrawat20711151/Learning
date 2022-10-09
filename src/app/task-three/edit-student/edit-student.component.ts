import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editStudent : FormGroup;
  formBuilder: any;
  constructor(
    private dialogRef: MatDialogRef<EditStudentComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      console.log('------------data-0-------',this.data);
    this.createform();
   }

  ngOnInit(): void {
  }
  createform(){
    this.editStudent = this.fb.group({
      studentID : [this.data.studentID,Validators.required],
      fname : [this.data.fname,Validators.required],
      lname : [this.data.lname,Validators.required],
      email : [this.data.email, [Validators.required, Validators.email]],
      fee :[this.data.fee,Validators.required],
      
    })
  }
 

  save(){
    console.log('---------------edit employee--------------',this.editStudent);
    if(this.editStudent.valid) {
      this.dialogRef.close(this.editStudent.value);  
  }
    
    
  }
}


