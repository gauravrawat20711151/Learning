import { Component, OnInit } from '@angular/core';
import {FormGroup, FormGroupDirective, NgForm, Validators, FormBuilder, FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-loging-page',
  templateUrl: './loging-page.component.html',
  styleUrls: ['./loging-page.component.css']
})
export class LogingPageComponent implements OnInit {
   addEmployee : FormGroup;
  password: string;
  dialogRef: any;
  dialog: any;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createform();
  }
  createform(){
    this.addEmployee = this.fb.group({
      user : ['',Validators.required],
      password : ['',Validators.required],
    });
  }
  log_in(){
    
  }
  back(){
    const dialogRef = this.dialog.open(LogingPageComponent, {
      width: '250px',
      panelClass:'icon-outside',
      data: {name: 'your name'}
    });

    dialogRef.afterClosed().subscribe((_result: any) => {
      console.log('The dialog was closed');
    });
  }
  hide = true;
  get user() { return this.addEmployee.get('user'); }
  get passwordInput() { return this.addEmployee.get('password'); }  
  }

