import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';





@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {
  displayedColumns: string[] = ['EmployeeID', 'fname', 'lname', 'email', 'salary','action'];


  dataSource: any[] = [
    {EmployeeID: 1, fname: 'Dhruv',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
    {EmployeeID: 2, fname: 'Gaurav',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
    {EmployeeID: 3, fname: 'mohit',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
    {EmployeeID: 4, fname: 'ragul',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
    {EmployeeID: 5, fname: 'pawan',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
    {EmployeeID: 6, fname: 'shivani',lname: 'Rawat', email:'rgauravrawat147@gmail.com', salary: 2000},
    {EmployeeID: 7, fname: 'suman',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
    {EmployeeID: 8, fname: 'ram',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
    {EmployeeID: 9, fname: 'harpal',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
    {EmployeeID: 10, fname: 'suraj',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
  ];
  @ViewChild('myTable') myTable: MatTable<any>;
  share: any;
  constructor(public dialog: MatDialog) { }

  
  ngOnInit(): void {
  }

  

  addEmployee() : void{
    console.log('-----------------Add employee-----------');
    const dialogRef =  this.dialog.open(AddEmployeeComponent, {
      width:'552px'
    });
    dialogRef.afterClosed().subscribe((res: any) =>{
      console.log('-------tak one----ad-emp-----------',res);
      this.dataSource.push(res);
      this.myTable.renderRows();
    })
    
  }
  editEmployee(employee: any):void{
    const index = this.dataSource.findIndex((ele)=>{
      return ele.EmployeeID == employee.EmployeeID
    });
    const dialogeRef = this.dialog.open(EditEmployeeComponent, {
      data:employee,
    });
    dialogeRef.afterClosed().subscribe(res=>{
      console.log('------edit-task------',res);
      if(res){
        this.dataSource.splice(index, 1, res);
        this.myTable.renderRows();
      }
      });
  }
  deleteEmployee(employee: any){
    console.log('------delete-------',employee);
    console.log('-----datasource---------',this.dataSource);
    const index = this.dataSource.findIndex((ele)=>{
      return ele.EmployeeID == employee.EmployeeID
    });
    this.dataSource.splice(index, 1)
    this.myTable.renderRows();
  }
}

