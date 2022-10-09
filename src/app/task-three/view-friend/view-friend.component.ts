import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AddFriendComponent } from '../add-friend/add-friend.component';
import { EditFriendComponent } from '../edit-friend/edit-friend.component';

@Component({
  selector: 'app-view-friend',
  templateUrl: './view-friend.component.html',
  styleUrls: ['./view-friend.component.css']
})
export class ViewFriendComponent implements OnInit {
  displayedColumns: string[] = ['friend', 'fname', 'lname', 'email', 'Amount','action'];


  // dataSource: any[] = [
  //   {friend: 8126273409, fname: 'Dhruv',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', Amount: 2000},
  //   {friend: 9760244272, fname: 'Gaurav',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', Amount: 2000},
  //   {friend: 9760223164, fname: 'mohit',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', Amount: 2000},

  // ];
  @Input() datas: any[]=[];
  @ViewChild('myTable') myTable: MatTable<any>;
  share: any;
  constructor(public dialog: MatDialog) { }


     
  ngOnInit(): void {

  }
  
  viewFriend() : void{
    console.log('-----------------Add student-----------');
    const dialogRef =  this.dialog.open(AddFriendComponent, {
      width:'552px'
    });
    dialogRef.afterClosed().subscribe((res: any) =>{
      console.log('-------tak one----ad-emp-----------',res);
      this.datas.push(res);
      this.myTable.renderRows();
    })
    
  }
  editFriend(employee: any):void{
    const index = this.datas.findIndex((ele)=>{
      return ele.friend == employee.friend
    });
    const dialogeRef = this.dialog.open(EditFriendComponent, {
      data:employee,
    });
    dialogeRef.afterClosed().subscribe((res: any)=>{
      console.log('------edit-task------',res);
      if(res){
        this.datas.splice(index, 1, res);
        this.myTable.renderRows();
      }
      });
  }
  delete(employee: any){
    console.log('------delete-------',employee);
    console.log('-----datas---------',this.datas);
    const index = this.datas.findIndex((ele)=>{
      return ele.friend == employee.friend
    });
    this.datas.splice(index, 1)
    this.myTable.renderRows();
  }
}