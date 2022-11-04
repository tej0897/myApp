import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public ageVal:number | any;

  public displayFlag:boolean | any = false;

  @Input() public parentCourseName:string|any;

  @Output() public childEvent = new EventEmitter();

  emitEventChild(){
    this.childEvent.emit("This data is going from child to parent component");
  }


}
