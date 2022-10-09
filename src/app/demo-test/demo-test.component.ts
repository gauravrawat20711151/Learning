import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-test',
  templateUrl: './demo-test.component.html',
  styleUrls: ['./demo-test.component.css']
})
export class DemoTestComponent implements OnInit {

  constructor() { }
  firstName: string;
  lastName: string;
  siblings =[
    { id: 1, name:'gaurav'},
    {id: 2, name: 'dhruv'} 
];
  ngOnInit(){
      this.firstName = 'John';
      this.lastName = 'Doe';
  }
}
