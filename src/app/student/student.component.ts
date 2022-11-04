import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {



  ngOnInit(): void {
  }


  studentObj:Student|any;

  constructor(){
    this.studentObj = new Student('Tejas', 'tej0897@gmail.com', 9740902770, 'C++');
  }

}
