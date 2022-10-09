import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {
  addFriend : FormGroup;
  checked = false;
  indeterminate = false;
  labelPosition: 'female' | 'male' = 'male';
  disabled = false;
  

  constructor(
    private dialogRef: MatDialogRef<AddFriendComponent>,
    private fb: FormBuilder
    ) {
    this.createform();
   }


  ngOnInit(): void {

  }
  createform(){
    this.addFriend = this.fb.group({
      friend : [null,Validators.required ],
      fname : ['',Validators.required],
      lname : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      Amount :['',Validators.required],
    
    })
  }
 

  saveEmployee(){
    console.log('---------------edit employee--------------',this.addFriend.value);
    this.dialogRef.close(this.addFriend.value);
  }
    
  }
  