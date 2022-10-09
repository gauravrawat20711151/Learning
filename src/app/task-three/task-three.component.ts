import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})
export class TaskThreeComponent implements OnInit {

  dataSource: any[]=[
    {employeeID: 1, fname: 'Dhruv',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
    {employeeID: 2, fname: 'Gaurav',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},
    {employeeID: 3, fname: 'mohit',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', salary: 2000},

  ];

  data: any[] = [
    {studentId: 1, fname: 'Dhruv',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', fee: 2000},
    {studentId: 2, fname: 'Gaurav',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', fee: 2000},
    {studentId: 3, fname: 'mohit',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', fee: 2000},
  ]
    datas: any[] = [
    {friend: 8126273409, fname: 'Dhruv',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', Amount: 2000},
    {friend: 9760244272, fname: 'Gaurav',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', Amount: 2000},
    {friend: 9760223164, fname: 'mohit',lname: 'Rawat', email: 'rgauravrawat147@gmail.com', Amount: 2000},
    ];
  constructor() { }

  ngOnInit(): void {
  }
  addEmployee($event: any){
    console.log('------emp detail-------',$event);
    console.log('------dataSource detail-------',this.dataSource);
    this.dataSource.push($event)
    // this.router.navigate(['/taskTwo/addEmp'])
    
  }
  addStudent(){
    console.log('------add student -------',this.addStudent);

  }
  addFriend( ){
    console.log('-------add friend ', this.addFriend)
  }
}
