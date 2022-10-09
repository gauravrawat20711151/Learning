import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddingemployeeComponent } from '../addingemployee/addingemployee.component';
import { EditingEmployeeComponent } from '../editing-employee/editing-employee.component';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  displayedColumns: string[] = ['employeeID', 'fname', 'lname', 'email', 'salary','action'];
  

  dataSource: any[] = [ ];
  @ViewChild('myTable') myTable: MatTable<any>;
  share: any;
  constructor(public dialog: MatDialog) { }


     
  ngOnInit(): void {

  }
  
  addingemployee() : void{
    const dialogRef =  this.dialog.open(AddingemployeeComponent, {
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
    const dialogeRef = this.dialog.open(EditingEmployeeComponent, {
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