import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {MatDialog, } from '@angular/material/dialog';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  addEmp(){
    console.log('------emp detail-------',this.addEmp);
    // this.router.navigate(['/taskTwo/addEmp'])
    
  }
  addStudent(){
    console.log('------add student -------',this.addStudent);

  }
  addFriend( ){
    console.log('-------add friend ', this.addFriend)
  }

}