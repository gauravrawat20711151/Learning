import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddingStudentComponent } from '../adding-student/adding-student.component';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  displayedColumns: string[] = ['studentId', 'fname', 'lname', 'email', 'fee','action'];


  dataSource: any[] = [
    
  ];
  @ViewChild('myTable') myTable: MatTable<any>;
  share: any;
  constructor(public dialog: MatDialog) { }


     
  ngOnInit(): void {

  }
  
  student() : void{
    console.log('-----------------Add student-----------');
    const dialogRef =  this.dialog.open(AddingStudentComponent, {
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
    const dialogeRef = this.dialog.open(AddStudentComponent, {
      data:employee,
    });
    dialogeRef.afterClosed().subscribe((res: any)=>{
      console.log('------edit-task------',res);
      if(res){
        this.dataSource.splice(index, 1, res);
        this.myTable.renderRows();
      }
      });
  }
  delete(employee: any){
    console.log('------delete-------',employee);
    console.log('-----datasource---------',this.dataSource);
    const index = this.dataSource.findIndex((ele)=>{
      return ele.EmployeeID == employee.EmployeeID
    });
    this.dataSource.splice(index, 1)
    this.myTable.renderRows();
  }
}