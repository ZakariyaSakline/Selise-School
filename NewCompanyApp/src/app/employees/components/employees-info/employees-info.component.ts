import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../../services/share-data.service';

@Component({
  selector: 'app-employees-info',
  templateUrl: './employees-info.component.html',
  styleUrls: ['./employees-info.component.css']
})
export class EmployeesInfoComponent implements OnInit {

  employeeInfo:any;
  constructor(
    private _shareData:ShareDataService,
  ) { }

  ngOnInit() {

    this._shareData.getEmployeeInfoApi()
    .subscribe(employeeData=>{this.employeeInfo=employeeData,
console.log(this.employeeInfo);
    })
  }

}
