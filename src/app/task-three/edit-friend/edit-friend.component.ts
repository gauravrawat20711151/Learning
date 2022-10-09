import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-friend',
  templateUrl: './edit-friend.component.html',
  styleUrls: ['./edit-friend.component.css']
})
export class EditFriendComponent implements OnInit {
  editFriend : FormGroup;
  formBuilder: any;
  constructor(
    private dialogRef: MatDialogRef<EditFriendComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      console.log('------------data-0-------',this.data);
    this.createform();
   }

  ngOnInit(): void {
  }
  createform(){
    this.editFriend = this.fb.group({
      friend : [this.data.friend,[Validators.required, Validators.pattern(("[6-9]\\d{9}"))] ],
      fname : [this.data.fname,Validators.required],
      lname : [this.data.lname,Validators.required],
      email : [this.data.email, [Validators.required, Validators.email]],
      Amount :[this.data.Amount,Validators.required],
      
    })
  }
 

  save(){
    console.log('---------------edit employee--------------',this.editFriend);
    if(this.editFriend.valid) {
      this.dialogRef.close(this.editFriend.value);  
  }
    
    
  }
}


