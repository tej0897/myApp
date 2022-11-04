import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faculty:any[] = [
    {"empID":101, "domain": "Java", "Name": "Tejas", "YOE": 13},
    {"empID":102, "domain": "Python", "Name": "Kumar", "YOE": 22},
    {"empID":103, "domain": "SQL", "Name": "Harini", "YOE": 4},
    {"empID":104, "domain": "C++", "Name": "Vivek", "YOE": 20},
    {"empID":105, "domain": "Angular", "Name": "Joe", "YOE": 12}    
  ]

}
