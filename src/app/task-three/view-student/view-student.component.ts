import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddStudentComponent } from '../add-student/add-student.component';
import { EditFriendComponent } from '../edit-friend/edit-friend.component';
import { EditStudentComponent } from '../edit-student/edit-student.component';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  displayedColumns: string[] = ['studentId', 'fname', 'lname', 'email', 'fee','action'];


  // dataSource: any[] = [
  //   {studentId: 1, fname: 'Dhruv',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', fee: 2000},
  //   {studentId: 2, fname: 'Gaurav',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', fee: 2000},
  //   {studentId: 3, fname: 'mohit',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', fee: 2000},
  // ]
  @Input() data: any[]=[];
  @ViewChild('myTable') myTable: MatTable<any>;
  share: any;
  constructor(public dialog: MatDialog) { }


     
  ngOnInit(): void {

  }
  
  viewStudent() : void{
    console.log('-----------------Add student-----------');
    const dialogRef =  this.dialog.open(AddStudentComponent, {
      width:'552px'
    });
    dialogRef.afterClosed().subscribe((res: any) =>{
      console.log('-------tak one----ad-emp-----------',res);
      this.data.push(res);
      this.myTable.renderRows();
    })
    
  }
  editStudent(employee: any):void{
    const index = this.data.findIndex((ele)=>{
      return ele.studentId == employee.studentId
    });
    const dialogeRef = this.dialog.open(EditStudentComponent, {
      data:employee,
    });
    dialogeRef.afterClosed().subscribe((res: any)=>{
      console.log('------edit-task------',res);
      if(res){
        this.data.splice(index, 1, res);
        this.myTable.renderRows();
      }
      });
  }
  delete(employee: any){
    console.log('------delete-------',employee);
    console.log('-----datasource---------',this.data);
    const index = this.data.findIndex((ele)=>{
      return ele.studentId == employee.studentId
    });
    this.data.splice(index, 1)
    this.myTable.renderRows();
  }
}
