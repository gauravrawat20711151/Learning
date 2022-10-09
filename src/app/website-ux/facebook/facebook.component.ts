import { Component, OnInit } from '@angular/core';
import { LogingPageComponent } from './loging-page/loging-page.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  myTable: MatTable<any>;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  login(){
    console.log('-----------------login-----------');
    this.dialog.open(LogingPageComponent, {
      width:'552px'
    })
  }
}
