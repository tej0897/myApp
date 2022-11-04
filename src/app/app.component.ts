import { outputAst } from '@angular/compiler';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  public myCompany : string | any = "Cognizant";  // returns any

  public btnStyle = "btn btn-warning";            // style property

  public disableStatus:boolean = false;            // passing property -> true -> does not allow button to be clicked and vice-versa


  showMessage = ($event:any) => {
    console.log("Button is clicked!! ");
    alert("Button is clicked!")
  }

  updateCompany = ($event:any) => {
    this.myCompany = $event.target.value;
    console.log(this.myCompany);
  }

  public printBtn : string|any = "Print Log Stuff";

  printLogFile = ($event:any) => {
    console.log("Button is clicked:/");
    this.printBtn="Generating report, Please wait...";

    console.log($event);

    setTimeout(()=>{
      this.printBtn="Log report printed...";}, 6000);

  }

  @Output() public courseName = "Angular.io";

  @Input() public message:any;
  


}
