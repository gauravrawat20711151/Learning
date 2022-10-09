import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() siblings:any = [];

  constructor() { }
  ngOnInit(): void {
    console.log('-0--------------',this.siblings);
  }

}
