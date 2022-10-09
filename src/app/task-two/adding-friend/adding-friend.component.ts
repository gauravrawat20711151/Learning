import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder,} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-adding-friend',
  templateUrl: './adding-friend.component.html',
  styleUrls: ['./adding-friend.component.css']
})
export class AddingFriendComponent implements OnInit {
  addFriend : FormGroup;
  checked = false;
  indeterminate = false;
  labelPosition: 'female' | 'male' = 'male';
  disabled = false;
  

  constructor(
    private dialogRef: MatDialogRef<AddingFriendComponent>,
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
  hide = true;
  get passwordInput() { return this.addFriend.get('password'); }  

  hide1 =true;
  get confirmPasswordInput()  {
    return this.addFriend.get('confirmPassword');
  }

  saveEmployee(){
    console.log('---------------edit employee--------------',this.addFriend.value);
    this.dialogRef.close(this.addFriend.value);
  }
    
  }
  