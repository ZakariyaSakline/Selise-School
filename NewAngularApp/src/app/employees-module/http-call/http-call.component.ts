import { Component, OnInit } from '@angular/core';
import {ShareDataService} from '../../share-data.service';
import { from } from 'rxjs';
import { User, Weather } from 'src/assets/userModel';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css']
})
export class HttpCallComponent implements OnInit {

  users:User[];
  mydata:Weather[];
  constructor(
    private _shareDataService:ShareDataService
    ) { }



  ngOnInit() {
    // http api call
    this._shareDataService.getConfig()
    .subscribe(data =>this.users=data);

    this._shareDataService.getWeatherApi()
    .subscribe(weatherData=>this.mydata= weatherData);
  }

}
