import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  displayedColumns: string[] = ['employeeID', 'fname', 'lname', 'email', 'salary','action'];
  // dataSource: any[] = [
  //   {employeeID: 1, fname: 'Dhruv',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
  //   {employeeID: 2, fname: 'Gaurav',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
  //   {employeeID: 3, fname: 'mohit',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},

  // ];
 @Input() dataSource: any[]=[];
 @Output() addEmployee: EventEmitter<any> = new EventEmitter();
  @ViewChild('myTable') myTable: MatTable<any>;
  share: any;
  constructor(public dialog: MatDialog) { }

  
  ngOnInit(): void {
  }

  

  viewEmployee() : void{
    // console.log('-----------------Add employee-----------');
    const dialogRef =  this.dialog.open(AddEmployeeComponent, {
      width:'552px'
    });
    dialogRef.afterClosed().subscribe((res: any) =>{
      console.log('-------tak one----ad-emp-----------',res);
      this.dataSource.push(res);
      this.addEmployee.emit(res);
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